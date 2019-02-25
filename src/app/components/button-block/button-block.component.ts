import { Component, OnInit, Input } from '@angular/core';

import { AppStateService } from 'src/app/services/app-state.service';
import { IArticle } from 'src/app/models';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss']
})
export class ButtonBlockComponent implements OnInit {
  @Input() articleId: string;

  constructor(private appStateService: AppStateService) { }

  ngOnInit() { }

  deleteArticle = () => {
    this.appStateService.deleteLocalArticle(this.articleId);
  }

  setCurrentArticle = () => {
    this.appStateService.setCurrentArticleId(this.articleId);
  }

}
