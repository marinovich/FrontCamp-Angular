import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppStateService } from 'src/app/services/app-state.service';
import { IArticle } from 'src/app/models';

@Component({
  selector: 'app-select-news-mode',
  templateUrl: './select-news-mode.component.html',
  styleUrls: ['./select-news-mode.component.scss']
})
export class SelectNewsModeComponent implements OnInit {
  private article: IArticle;
  private isNeedToShowButtons: boolean;

  constructor(
    public router: ActivatedRoute,
    private appStateService: AppStateService,
  ) { }

  ngOnInit() {
    this.article = this.appStateService.getCurrentArticle();
    this.isNeedToShowButtons = this.appStateService.isShownOnlyLocal();
  }

}
