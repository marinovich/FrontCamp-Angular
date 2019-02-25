import { Component, Input, OnInit } from '@angular/core';

import { IArticle } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle;
  @Input() i: number;
  @Input() allowChanges: boolean;
  @Input() maxNumber: number;

  constructor(private appStateService: AppStateService) { }

  ngOnInit() { }

  deleteArticle = () => {
    this.appStateService.deleteLocalArticle(this.article.id);
  }

  setCurrentArticle = () => {
    this.appStateService.setCurrentArticleId(this.article.id);
  }

}
