import { Component, OnInit } from '@angular/core';

import { IArticle } from 'src/app/models';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public articles: IArticle[] = [];
  private filter: string;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit(): void {
    this.newsApiService.updateArticlesData.subscribe(
      (articles: IArticle[]) => this.articles = articles,
      (error) => console.error(error),
    );

    this.newsApiService.updateFilter.subscribe(
      (filter: string) => this.filter = filter,
      (error) => console.error(error),
    );

    this.newsApiService.getArticles(this.newsApiService.getSelectedSource());
  }

}
