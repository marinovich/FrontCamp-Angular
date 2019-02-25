import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { MainComponent } from './components/main/main.component';
import { EditModeComponent } from './components/edit-mode/edit-mode.component';
import { SelectNewsModeComponent } from './components/select-news-mode/select-news-mode.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { NewsFilterPipe } from './pipes/news-filter/news-filter.pipe';
import { ButtonBlockComponent } from './components/button-block/button-block.component';

const appRoutes: Routes = [
  { path: 'add', component: EditModeComponent },
  { path: 'edit', component: EditModeComponent },
  { path: 'more', component: SelectNewsModeComponent },
  { path: '', component: MainComponent, pathMatch: 'full' },
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
    NewsFilterPipe,
    ButtonBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
