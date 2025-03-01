import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Study } from '../models/studies.model';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  constructor(private http: HttpClient) {}

  GetStudies(): Observable<Study[]> {
    return this.http.get<Study[]>('/api/studies');
  }

  AddStudy(study: Study): Observable<Study> {
    return this.http.post<Study>('/api/studies', study);
  }
}
