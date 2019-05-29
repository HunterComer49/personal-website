import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeProjectComponent } from './resume-project/resume-project.component';

const routes: Routes = [
  { path: '', component: ResumeProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
