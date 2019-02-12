import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { articles } from 'src/app/articles';

@Component({
  selector: 'app-select-news-mode',
  templateUrl: './select-news-mode.component.html',
  styleUrls: ['./select-news-mode.component.scss']
})
export class SelectNewsModeComponent implements OnInit {
  private i: number;
  public article;

  constructor(public router: ActivatedRoute) { }

  ngOnInit() {
    this.i = +this.router.snapshot.paramMap.get('i');
    this.article = articles[this.i];
  }

}
