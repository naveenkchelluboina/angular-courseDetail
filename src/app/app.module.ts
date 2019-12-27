import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';

const routes: Route = [
  {path: 'home', component:HomeComponent},
  { path: 'course', component: CourseComponent },
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, CourseComponent, HomeComponent, ChapterListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
