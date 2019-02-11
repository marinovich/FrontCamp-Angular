import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { EditModeComponent } from './edit-mode/edit-mode.component';
import { SelectNewsModeComponent } from './select-news-mode/select-news-mode.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'edit', component: EditModeComponent },
  { path: 'select', component: SelectNewsModeComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditModeComponent,
    SelectNewsModeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
