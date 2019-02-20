import { Component } from '@angular/core';

import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewsApiService],
})
export class AppComponent {
  title = 'FrontCamp-Angular';
}
