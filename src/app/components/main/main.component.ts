import { Component, OnInit } from '@angular/core';

import { IArticle } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public articles: IArticle[] = [];
  private filter: string;
  private allowChanges: boolean;
  private maxArticlesNumber = 4;

  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {
    this.appStateService.updateArticlesData.subscribe(
      (articles: IArticle[]) => {
        this.articles = articles;
        this.allowChanges = this.appStateService.isShownOnlyLocal();
      },
      (error: Error) => console.error(error),
    );

    this.appStateService.updateFilter.subscribe(
      (filter: string) => this.filter = filter,
      (error: Error) => console.error(error),
    );

    this.appStateService.getArticles();
  }

  increaseMaxArticlesNumber = () => this.maxArticlesNumber += 4;

}
