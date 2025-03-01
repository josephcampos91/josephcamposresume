import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume.routing';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [ResumeComponent]
})
export class ResumeModule { }
