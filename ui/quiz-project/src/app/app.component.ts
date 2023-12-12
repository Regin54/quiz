import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-project';

  readonly APIUrl = "http://localhost:5050";

  constructor(private http:HttpClient) {
  }

  questions:any = [];
  questionsOrder:any = [];

  getQuestions() {
    this.http.get(`${this.APIUrl}/api/`, {responseType: 'text'}).subscribe(data => {
      this.questions.push(JSON.parse(data));
      
      while(this.questionsOrder.length < 10) {
        let randomNumber = Math.floor(Math.random() * 10);
        if(this.questionsOrder.indexOf(randomNumber) == -1){
          this.questionsOrder.push(randomNumber);
        }
      }
    });
  }

  ngOnInit() {
    this.getQuestions();
  }

  onOutletLoaded(component: QuizComponent) {
    component.questions = this.questions;
    component.questionsOrder = this.questionsOrder;
  }
}
