import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_KEY } from 'src/app/constants';
import { ISourcesResponse, ITopHeadlinesResponse, ISource, IArticle } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public updatedSourcesData: EventEmitter<ISource[]> = new EventEmitter();
  public updateArticlesData: EventEmitter<{ sourceId: string, articles: IArticle[]}> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getSources = () => {
    this.http.get<ISourcesResponse>(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`).toPromise()
      .then((response) => this.updatedSourcesData.emit(response.sources))
      .catch(error => console.error(error));
  }

  getArticles = (sourceId: string) => {
    this.http.get<ITopHeadlinesResponse>(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}`).toPromise()
      .then((response) => this.updateArticlesData.emit({ sourceId, articles: response.articles }))
      .catch(error => console.error(error));
  }
}
