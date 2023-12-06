import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
  result:any = "";

  getQuestions() {
    this.http.get(`${this.APIUrl}/api/`, {responseType: 'text'}).subscribe(data => {
      this.questions.push(JSON.parse(data));
    });
  }

  ngOnInit() {
    this.getQuestions();
  }
}
