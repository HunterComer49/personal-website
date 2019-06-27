import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTenantProjectComponent } from './multi-tenant-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MultiTenantProjectComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [MultiTenantProjectComponent]
})
export class MultiTenantProjectModule { }
