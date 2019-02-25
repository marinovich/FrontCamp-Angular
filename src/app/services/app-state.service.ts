import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as md5 from 'md5';

import { ISource, IArticle } from 'src/app/models';
import { AuthService } from './auth.service';
import { DatabaseNewsService } from './database-news.service';
import { NewsApiService } from './news-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public updatedSourcesData: EventEmitter<ISource[]> = new EventEmitter();
  public updateSelectedSource: EventEmitter<ISource> = new EventEmitter();
  public updateArticlesData: EventEmitter<IArticle[]> = new EventEmitter();
  public updateFilter: EventEmitter<string> = new EventEmitter();
  public updateAuthStatus: EventEmitter<boolean> = new EventEmitter();

  private newsSources = [] as ISource[];
  private shownOnlyLocalNews = false;
  private isLoggedIn: boolean;
  private selectedNewsSource: ISource;
  private currentArticleId: string;
  private articlesMap = new WeakMap<ISource, IArticle[]>();
  private localNews = new Map<string, IArticle>();

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private databaseNewsService: DatabaseNewsService,
    private newsApiService: NewsApiService,
  ) {
    /**
     * Internal subscriptions
     */

    this.updateSelectedSource.subscribe(
      (selectedSource: ISource) => {
        this.selectedNewsSource = selectedSource;
        this.getArticles();
      },
      (error: Error) => console.error(error),
    );

    /**
     * News API service subscriptions
     */

    this.newsApiService.updateArticlesData.subscribe(
      // TODO: add types
      ({ sourceId, articles }: { sourceId: string, articles: IArticle[] }) => {
        const source = this.getSourceById(sourceId);

        if (!source) {
          throw new Error('Source did not found');
        }

        const updatedArticles = articles.map(article => {
          article.id = md5(article.title);

          return article;
        });

        this.articlesMap.set(this.getSourceById(sourceId), updatedArticles);
        this.updateArticlesData.emit(updatedArticles);
      },
      (error: Error) => console.error(error),
    );

    this.newsApiService.updatedSourcesData.subscribe(
      (sources: ISource[]) => {
        this.newsSources = sources;
        this.updatedSourcesData.emit(this.newsSources);
      },
      (error: Error) => console.error(error),
    );

    /**
     * News db service subscriptions
     */

    this.databaseNewsService.addLocalNewsData.subscribe(
      (newLocalArticle: IArticle) => {
        this.localNews.set(newLocalArticle.id, newLocalArticle);
      },
      (error: Error) => console.error(error),
    );

    this.databaseNewsService.deleteLocalNewsData.subscribe(
      (deletedArticleId: string) => {
        this.localNews.delete(deletedArticleId);
        this.updateArticlesData.emit(Array.from(this.localNews.values()));
      },
      (error: Error) => console.error(error),
    );

    this.databaseNewsService.updateLocalNewsData.subscribe(
      ({ outdatedArticleId, updatedArticle }) => {
        this.localNews.delete(outdatedArticleId);
        this.localNews.set(updatedArticle.id, updatedArticle);

        this.updateArticlesData.emit(Array.from(this.localNews.values()));
      },
      (error: Error) => console.error(error),
    );

    this.databaseNewsService.updateArticlesData.subscribe(
      (articles: IArticle[]) => {
        articles.forEach(article => this.localNews.set(article.id, article));
        this.updateArticlesData.emit(articles);
      },
      (error: Error) => console.error(error),
    );

    /**
     * Auth service subscriptions
     */

    this.authService.updateAuthStatus.subscribe(
      (isLoggedIn: boolean) => this.updateAuthStatus.emit(isLoggedIn),
      (error: Error) => console.error(error),
    );
  }

  public setCurrentArticleId = (articleId: string) => this.currentArticleId = articleId;
  public resetCurrentArticleId = () => this.currentArticleId = null;

  public getCurrentArticle = (): IArticle => {
    const currentArticle = this.localNews.get(this.currentArticleId)
      || this.articlesMap.get(this.selectedNewsSource).find(article => article.id === this.currentArticleId);

    return currentArticle;
  }

  isShownOnlyLocal = () => this.shownOnlyLocalNews;

  getSources = () => {
    this.newsSources && this.newsSources.length > 1
      ? this.updatedSourcesData.emit(this.newsSources)
      : this.newsApiService.getSources();
  }

  getArticles = () => {
    const source = this.selectedNewsSource;

    if (!this.shownOnlyLocalNews && !source) {
      return;
    }

    if (this.shownOnlyLocalNews) {
      this.databaseNewsService.getLocalNews();
    } else if (this.articlesMap.has(source)) {
      this.updateArticlesData.emit(this.articlesMap.get(source));
    } else {
      this.newsApiService.getArticles(this.getSelectedSourceId());
    }
  }

  getSelectedSourceId = (): string => this.selectedNewsSource.id;
  getSelectedSource = (): ISource => this.selectedNewsSource;
  getSourceById = (sourceId: string): ISource => this.newsSources.find(source => sourceId === source.id);

  setLocalNews = (article: IArticle) => {
    this.databaseNewsService.setLocalNews(article);
  }

  updateLocalNews = (articleId: string, article: IArticle) => {
    this.databaseNewsService.updateLocalArticle(articleId, article);
  }

  deleteLocalArticle = (articleId: string) => {
    this.databaseNewsService.deleteLocalArticle(articleId);
  }

  toggleLocalNews = () => {
    this.shownOnlyLocalNews = !this.shownOnlyLocalNews;
    this.getArticles();
  }

  applyFilter = (filter: string) => {
    this.updateFilter.emit(filter);
  }

  /**
   * Auth api service
   */

  isUserLoggedIn = () => {
    this.authService.loginStatus()
      .then(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        this.updateAuthStatus.emit(isLoggedIn);
      })
      .catch(error => console.error(error));
  }

  getLoginStatus = () => this.isLoggedIn;

  login = () => {
    this.authService.login();
  }

  logout = () => {
    this.authService.logout();
  }
}
