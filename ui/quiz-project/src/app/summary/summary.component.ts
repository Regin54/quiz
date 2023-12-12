import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor(private route:ActivatedRoute, private http:HttpClient) {}

  readonly APIUrl = "http://localhost:5050";

  points:number = 0;
  time:any = 0;
  maxPoints:number = 0;
  progressValue:number = 0;
  username:string = "";

  ngOnInit() {
    this.route.params.subscribe(async event => {
      this.points = event['points'];
      this.time = event['time'];
      this.maxPoints = event['questions'];
      this.username = event['username'];

      this.progressValue = (this.points/this.maxPoints) * 100;

      return this.http.post(`${this.APIUrl}/api/post`, {
        points: this.points,
        username: this.username,
        time: this.time,
        maxPoints: this.maxPoints,
      }, {headers: {"Content-Type": "application/json"}}).subscribe();
    }
  )}
}