import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router:Router) {}
  username:string = "";
  isDisabled:boolean = true;

  onSubmit(event:any) {
    this.router.navigate(['/quiz', {username: this.username}]);
  }
}
