import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_KEY } from 'src/app/constants';
import { ISourcesResponse, ITopHeadlinesResponse, ISource, IArticle } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public updatedSourcesData: EventEmitter<ISource[]> = new EventEmitter();
  public updateSelectedSource: EventEmitter<ISource> = new EventEmitter();
  public updateArticlesData: EventEmitter<IArticle[]> = new EventEmitter();
  public updateFilter: EventEmitter<string> = new EventEmitter();

  public sources: ISource[] = [{ id: 'local', name: 'Local News' }];
  public selectedSource: ISource;
  public articlesMap = new WeakMap<ISource, IArticle[]>();
  public localNews = [] as IArticle[];

  constructor(private http: HttpClient) {
    this.updateSelectedSource.subscribe(
      (source: ISource) => {
        this.selectedSource = source;
        this.getArticles(this.selectedSource);
      },
      (error) => console.error(error),
    );
  }

  getSources = () => {
    this.sources.length > 1
      ? this.updatedSourcesData.emit(this.sources)
      : this.http.get<ISourcesResponse>(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
        .forEach((response) => {
          const { sources } = response;
          this.sources.push(...sources);

          this.updatedSourcesData.emit(this.sources);
        });
  }

  getArticles = (source: ISource) => {
    if (!source) {
      return;
    }

    if (source.id === 'local') {
      this.articlesMap.set(source, this.localNews);
    }

    this.articlesMap.has(source)
      ? this.updateArticlesData.emit(this.articlesMap.get(source))
      : this.http.get<ITopHeadlinesResponse>(`https://newsapi.org/v2/top-headlines?sources=${source.id}&apiKey=${API_KEY}`)
        .forEach((response) => {
          const { articles } = response;
          this.articlesMap.set(source, articles);

          this.updateArticlesData.emit(articles);
        });
  }

  getSelectedSource = () => this.selectedSource;

  setLocalNews = (article: IArticle) => {
    this.localNews.push(article);

    this.updateArticlesData.emit(this.localNews);
  }

  selectLocalNews = () => {
    this.selectedSource = this.sources.find(source => source.id === 'local');
    this.updateSelectedSource.emit(this.selectedSource);
  }

  applyFilter = (filter: string) => {
    this.updateFilter.emit(filter);
  }
}
