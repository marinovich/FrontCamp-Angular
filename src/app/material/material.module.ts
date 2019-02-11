import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
