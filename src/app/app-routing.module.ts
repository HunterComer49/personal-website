import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeProjectComponent } from './resume-project/resume-project.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'projects/resume', component: ResumeProjectComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
