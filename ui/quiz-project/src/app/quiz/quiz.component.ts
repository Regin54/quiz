import { Component } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions:any = [];
  questionsOrder:any = [];
  count:number = 0;
  timerInterval:any;
  seconds:number = 0;

  onAnswerSubmit() {
    this.count += 1;
    console.log(this.questions);
    if(this.count == 9) {
      console.log(this.seconds);
    }
  }

  ngOnInit() {
    this.timerInterval = setInterval(() => {
      this.seconds += 1
    }, 1000)
  }
}
