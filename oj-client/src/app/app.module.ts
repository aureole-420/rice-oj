import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';  /* import form module [()]=  two way binding, ()= one way binding*/

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import {routing} from './app.routes';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';


import {HttpClientModule} from '@angular/common/http';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavigationBarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,  /* 这里一定要加，不然就不能显示form！ */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
