import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IArticle } from 'src/app/models';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent implements OnInit {
  public headingControl: FormControl = new FormControl('');
  public shortDescriptionControl: FormControl = new FormControl('');
  public contentControl: FormControl = new FormControl('');
  public imageSourceControl: FormControl = new FormControl('');
  public dateControl: FormControl = new FormControl('');
  public authorControl: FormControl = new FormControl('');
  public sourceURLControl: FormControl = new FormControl('');
  public saveButtonControl: FormControl = new FormControl('');
  public cancelButtonControl: FormControl = new FormControl('');

  public userFormGroup: FormGroup = new FormGroup({
    heading: this.headingControl,
    shortDescription: this.shortDescriptionControl,
    content: this.contentControl,
    imageSource: this.imageSourceControl,
    date: this.dateControl,
    author: this.authorControl,
    sourceURL: this.sourceURLControl,
    saveButton: this.saveButtonControl,
    cancelButton: this.cancelButtonControl,
  });

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {}

  submit = () => {
    const formGroupData: IFormGroup = this.userFormGroup.getRawValue();
    const localArticle: IArticle = {
      content: formGroupData.content,
      url: formGroupData.sourceURL,
      author: formGroupData.author,
      description: formGroupData.shortDescription,
      publishedAt: formGroupData.date.toISOString(),
      title: formGroupData.heading,
      urlToImage: formGroupData.imageSource,
    };

    this.newsApiService.setLocalNews(localArticle);
  }

}

interface IFormGroup {
  heading: string;
  shortDescription: string;
  content: string;
  imageSource: string;
  date: Date;
  author: string;
  sourceURL: string;
  saveButton: string;
  cancelButton: string;
}
