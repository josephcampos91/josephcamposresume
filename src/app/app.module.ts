import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { StudiesService } from './shared/services/studies.service';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ResumeModule
  ],
  providers: [
    StudiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
