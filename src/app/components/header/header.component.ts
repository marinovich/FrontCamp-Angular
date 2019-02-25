import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Router } from '@angular/router';

import { ISource, IArticle } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private selectedSource: ISource;
  private sources: ISource[];
  private checked: boolean;
  private data: string;
  private isLoggedIn = false;

  constructor(
    private router: Router,
    private appStateService: AppStateService,
  ) {}

  ngOnInit() {
    this.appStateService.updatedSourcesData.subscribe(
      (sources: ISource[]) => this.sources = sources,
      (error: Error) => console.error(error),
    );

    this.appStateService.updateAuthStatus.subscribe(
      (isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn,
      (error: Error) => console.error(error),
    );

    this.appStateService.getSources();
    this.appStateService.isUserLoggedIn();
    this.checked = this.appStateService.isShownOnlyLocal();
  }

  onChange(source: ISource) {
    this.selectedSource = source;
    this.appStateService.updateSelectedSource.emit(source);
  }

  addArticle = () => {
    this.selectedSource = this.appStateService.getSelectedSource();
  }

  toggle = (event: MatCheckboxChange) => {
    this.checked = event.checked;
    this.appStateService.toggleLocalNews();
  }

  filterArticles = () => {
    this.appStateService.applyFilter(this.data);
  }

  login = () => {
    this.appStateService.login();
  }

  logout = () => {
    this.appStateService.logout();
  }

  resetCurrentArticleId = () => {
    this.appStateService.resetCurrentArticleId();
  }
}
