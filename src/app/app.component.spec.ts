import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StudiesService } from './shared/services/studies.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let studiesServiceSpy: jasmine.SpyObj<StudiesService>;

  beforeEach(() => {
    studiesServiceSpy = jasmine.createSpyObj('StudiesService', ['GetStudies']);
    studiesServiceSpy.GetStudies.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: StudiesService, useValue: studiesServiceSpy }
      ]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize and log message', () => {
    const consoleSpy = spyOn(console, 'log');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    expect(consoleSpy).toHaveBeenCalledWith('AppComponent initialized');
  });
});
