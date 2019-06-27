import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultiTenantProjectModule } from '../projects/multi-tenant-project/multi-tenant-project.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MultiTenantProjectModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
