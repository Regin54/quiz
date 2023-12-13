import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient) {}

  readonly APIUrl = "http://localhost:5050/api";

  players:any = [];

  ngOnInit() {
    this.http.get(`${this.APIUrl}/stats`).subscribe(data => {
      this.players = data;

      this.players.sort((a:any, b:any) => (Number(a.points) > Number(b.points)) ? -1 : 1);
    })
  }
}
