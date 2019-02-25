import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from 'src/app/constants';
import { IArticle } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseNewsService {
  public updateArticlesData: EventEmitter<IArticle[]> = new EventEmitter();
  public addLocalNewsData: EventEmitter<IArticle> = new EventEmitter();
  public deleteLocalNewsData: EventEmitter<string> = new EventEmitter();
  public updateLocalNewsData: EventEmitter<{ outdatedArticleId: string, updatedArticle: IArticle }> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public getLocalNews = () => {
    this.http.get(`${SERVER_URL}/news`, { withCredentials: true }).toPromise()
      .then((articles: IArticle[]) => this.updateArticlesData.emit(articles))
      .catch((error) => console.error(error.error.text));
  }

  public setLocalNews = (article: IArticle) => {
    this.http.post(`${SERVER_URL}/news`, article, { withCredentials: true }).toPromise()
      .then((articleData: IArticle) => this.addLocalNewsData.emit(articleData))
      .catch((error) => console.error(error.error.text));
  }

  public deleteLocalArticle = (articleId: string) => {
    this.http.delete(`${SERVER_URL}/news/${articleId}`, { withCredentials: true }).toPromise()
      .then(() => this.deleteLocalNewsData.emit(articleId))
      .catch((error) => console.error(error.error.text));
  }

  public updateLocalArticle = (articleId: string, article: IArticle) => {
    this.http.put(`${SERVER_URL}/news/${articleId}`, article, { withCredentials: true }).toPromise()
      .then(() => this.updateLocalNewsData.emit({ outdatedArticleId: articleId, updatedArticle: article }))
      .catch((error) => console.error(error.error.text));
  }
}
