import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(private _router: Router, private route:ActivatedRoute) { }

  questions:any = [];
  questionsOrder:any = [];
  count:number = 0;
  timerInterval:any;
  seconds:number = 0;

  answers:any = [];

  chosenAnswer:string = "";

  points:number = 0;
  currentQuestion:any;
  username:string = "";

  progressBarTimer:any = 10;

  ngOnInit() {
    this.currentQuestion = this.questions[0][this.questionsOrder[this.count]];
    this.route.params.subscribe(event => {
      this.username = event['username'];
    })
    
    this.timerInterval = setInterval(() => {
      this.seconds += 1
      this.progressBarTimer -= 1;
      
      if(this.progressBarTimer < 0) {
        this.onAnswerSubmit();
      }
    }, 1000)
  }

  onAnswerSubmit() {
    this.progressBarTimer = 10;
    this.count += 1;

    if(this.count > 9) {
      if(this.chosenAnswer == this.currentQuestion.correctAnswer) {
        this.points += 1;
      }
      
      this._router.navigate(['/summary', {username: this.username, points: this.points, time: this.seconds, questions: this.questions[0].length}]);
    } else {
      if(this.chosenAnswer == this.currentQuestion.correctAnswer) {
        this.points += 1;
      }
    }
    this.currentQuestion = this.questions[0][this.questionsOrder[this.count]];
  }

  onAnswerCheck(answer:string) {
    this.chosenAnswer = answer;
  }
}
