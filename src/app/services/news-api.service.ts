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

  public sources: ISource[];
  public selectedSource: ISource;
  public articlesMap = new WeakMap<ISource, IArticle[]>();

  constructor(private http: HttpClient) {
    this.updateSelectedSource.subscribe(
      (sources: ISource) => {
        this.selectedSource = sources;
        this.getArticles(sources);
      },
      (error) => console.error(error),
    );
  }

  getSources = () => {
    this.sources
      ? this.updatedSourcesData.emit(this.sources)
      : this.http.get<ISourcesResponse>(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
        .forEach((response) => {
          const { sources } = response;
          this.sources = sources;

          this.updatedSourcesData.emit(sources);
        });
  }

  getArticles = (source: ISource) => {
    this.articlesMap.has(source)
      ? this.updateArticlesData.emit(this.articlesMap.get(source))
      : this.http.get<ITopHeadlinesResponse>(`https://newsapi.org/v2/top-headlines?sources=${source.id}&apiKey=${API_KEY}`)
        .forEach((response) => {
          const { articles } = response;
          this.articlesMap.set(source, articles);

          this.updateArticlesData.emit(articles);
        });
  }
}
