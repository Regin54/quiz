import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(private _router: Router) { }

  questions:any = [];
  questionsOrder:any = [];
  count:number = 0;
  timerInterval:any;
  seconds:number = 0;

  answers:any = [];

  chosenAnswer:string = "";

  points:number = 0;
  currentQuestion:any;

  ngOnInit() {
    this.currentQuestion = this.questions[0][this.questionsOrder[this.count]]
    console.log('siema');
    
    this.timerInterval = setInterval(() => {
      this.seconds += 1
    }, 1000)
  }

  onAnswerSubmit() {
    this.count += 1;

    if(this.count > 9) {
      this._router.navigate(['/summary']);
    } else {
      console.log(this.currentQuestion.correctAnswer);

      if(this.chosenAnswer == this.currentQuestion.correctAnswer) {
        this.points += 1;
      }
    }
    this.currentQuestion = this.questions[0][this.questionsOrder[this.count]];
    console.log(this.points);
  }

  onAnswerCheck(answer:string) {
    this.chosenAnswer = answer;
  }
}
