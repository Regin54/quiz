import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { SummaryComponent } from './summary/summary.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
