import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private fileUrl = 'assets/js-files/courses.js';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.fileUrl);
  }

  updateCourse(course: any): Observable<any> {
    return this.http.put<any>(`${this.fileUrl}/${course.id}`, course);
  }
}
