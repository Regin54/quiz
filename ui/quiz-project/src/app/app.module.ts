import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent,
    HomeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
