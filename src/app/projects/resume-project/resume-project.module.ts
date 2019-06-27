import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeProjectComponent } from './resume-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ResumeProjectComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ResumeProjectComponent]
})
export class ResumeProjectModule { }
