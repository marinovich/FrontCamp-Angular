import { Component, OnInit } from '@angular/core';
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

}
