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
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';

const appRoutes: Routes = [
  { path: 'add', component: EditModeComponent },
  { path: 'edit/:i', component: EditModeComponent },
  { path: 'more/:i', component: SelectNewsModeComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditModeComponent,
    SelectNewsModeComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
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
