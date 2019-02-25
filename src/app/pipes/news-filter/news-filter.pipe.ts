import { Pipe, PipeTransform } from '@angular/core';

import * as Models from 'src/app/models';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(articles: Models.IArticle[], filter = ''): Models.IArticle[] {
    return articles.filter(article => article.title.includes(filter));
  }

}
