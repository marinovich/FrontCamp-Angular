import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public items = [
    {
      id: 'abc-news',
      name: 'ABC News',
      description: 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
      url: 'https://abcnews.go.com',
      category: 'general',
      language: 'en',
      country: 'us'
    },
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: `Australia's most trusted source of local, national and world news.`,
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au'
    },
    {
      id: 'aftenposten',
      name: 'Aftenposten',
      description: 'Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.',
      url: 'https://www.aftenposten.no',
      category: 'general',
      language: 'no',
      country: 'no'
    },
    {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English',
      description: 'News, analysis from the Middle East and worldwide, multimedia.',
      url: 'http://www.aljazeera.com',
      category: 'general',
      language: 'en',
      country: 'us'
    },
    {
      id: 'ansa',
      name: 'ANSA.it',
      description: 'Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica.',
      url: 'http://www.ansa.it',
      category: 'general',
      language: 'it',
      country: 'it'
    },
    {
      id: 'axios',
      name: 'Axios',
      description: 'Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient.',
      url: 'https://www.axios.com',
      category: 'general',
      language: 'en',
      country: 'us'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
