import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent implements OnInit {
  public userNameControl: FormControl = new FormControl('');
  public emailControl: FormControl = new FormControl('');
  public userFormGroup: FormGroup = new FormGroup({
    userName: this.userNameControl,
    email: this.emailControl
  });


  constructor() { }

  ngOnInit() {
  }

}
