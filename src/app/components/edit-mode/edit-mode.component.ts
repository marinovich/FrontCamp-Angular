import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as md5 from 'md5';

import { IArticle } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent implements OnInit {
  private headingControl: FormControl = new FormControl('');
  private shortDescriptionControl: FormControl = new FormControl('');
  private contentControl: FormControl = new FormControl('');
  private imageSourceControl: FormControl = new FormControl('');
  private dateControl: FormControl = new FormControl('');
  private authorControl: FormControl = new FormControl('');
  private sourceURLControl: FormControl = new FormControl('');
  private saveButtonControl: FormControl = new FormControl('');
  private cancelButtonControl: FormControl = new FormControl('');

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

  private currentArticle: IArticle;

  constructor(
    private appStateService: AppStateService,
  ) { }

  ngOnInit() {
    this.currentArticle = this.appStateService.getCurrentArticle();

    if (!this.currentArticle) {
      return;
    }

    // filling userForm fields
    this.headingControl.setValue(this.currentArticle.title);
    this.shortDescriptionControl.setValue(this.currentArticle.description);
    this.contentControl.setValue(this.currentArticle.content);
    this.imageSourceControl.setValue(this.currentArticle.urlToImage);
    this.dateControl.setValue(new Date(this.currentArticle.publishedAt));
    this.authorControl.setValue(this.currentArticle.author);
    this.sourceURLControl.setValue(this.currentArticle.url);
  }

  submit = () => {
    const formGroupData: IFormGroup = this.userFormGroup.getRawValue();
    const localArticle: IArticle = {
      id: md5(formGroupData.heading),
      content: formGroupData.content,
      url: formGroupData.sourceURL,
      author: formGroupData.author,
      description: formGroupData.shortDescription,
      title: formGroupData.heading,
      urlToImage: formGroupData.imageSource,
      ...(formGroupData.date && {publishedAt: formGroupData.date.toISOString() }),
    };

    this.currentArticle
      ? this.appStateService.updateLocalNews(this.currentArticle.id, localArticle)
      : this.appStateService.setLocalNews(localArticle);
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
