import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeProjectComponent } from './projects/resume-project/resume-project.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { MultiTenantProjectComponent } from './projects/multi-tenant-project/multi-tenant-project.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/resume', component: ResumeProjectComponent },
  { path: 'projects/multi-tenant', component: MultiTenantProjectComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
