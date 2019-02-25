import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Router } from '@angular/router';

import { ISource, IArticle } from 'src/app/models';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private selectedSource: ISource;
  private sources: ISource[];
  private checked: boolean;
  private previousSource: ISource;
  private data: string;

  constructor(
    private router: Router,
    private newsApiService: NewsApiService,
  ) {}

  ngOnInit() {
    this.newsApiService.getSources();

    this.newsApiService.updatedSourcesData.subscribe(
      (sources: ISource[]) => this.sources = sources,
      (error) => console.error(error),
    );
  }

  onChange(source: ISource) {
    this.selectedSource = source;
    this.newsApiService.updateSelectedSource.emit(source);
  }

  addArticle = () => {
    this.newsApiService.selectLocalNews();
    this.selectedSource = this.newsApiService.getSelectedSource();
  }

  toggle = (event: MatCheckboxChange) => {
    this.checked = event.checked;

    if (event.checked) {
      this.previousSource = this.selectedSource;
      this.newsApiService.selectLocalNews();
      this.selectedSource = this.newsApiService.getSelectedSource();
    } else {
      this.selectedSource = this.previousSource;
      this.newsApiService.updateSelectedSource.emit(this.selectedSource);
    }
  }

  filterArticles = () => {
    this.newsApiService.applyFilter(this.data);
  }

}
