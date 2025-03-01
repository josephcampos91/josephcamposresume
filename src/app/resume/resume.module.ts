import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume.routing';
import { ProfileModule } from './profile/profile.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    ProfileModule,
    EducationModule,
    ExperienceModule
  ]
})
export class ResumeModule { }
