import { Component, OnInit } from '@angular/core';
import { StudiesService } from './shared/services/studies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private studiesService: StudiesService) {}

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }

  private loadStudies(): void {
    this.studiesService.GetStudies().subscribe((studies) => {
      console.log('Studies loaded:', studies);
    });
  }
}
