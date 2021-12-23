import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Learner } from '../models/learner';

import { Course } from '../models/course'

@Injectable({
  providedIn: 'root',
})
export class CoursesSevicesService {
  learners_url = '../assets/learners.json';
  id = 'yoKqVevIVmIHxgavgtaaNLb7qipHgPiOzUSL6fGJ';
  secret =
    '3dpCNmER5iBZmGZnWh6sBMpp3ANv0i9p9f0QsgQXCYxjkktPSLDKBNFTcWas9gHMWkHOQcnAExfjp9yOzyCjlfTKsDwwu60eGwnxWxGiuIJz31UZutths4tIXJUVc5l7';

//  {
//       headers: new HttpHeaders({
//         Accept: 'application/json, text/plain, */*',
//         Authorization: `Basic eW9LcVZldklWbUlIeGdhdmd0YWFOTGI3cWlwSGdQaU96VVNMNmZHSjoJM2RwQ05tRVI1aUJabUdabldoNnNCTXBwM0FOdjBpOXA5ZjBRc2dRWENZeGpra3RQU0xES0JORlRjV2FzOWdITVdrSE9RY25BRXhmanA5eU96eUNqbGZUS3NEd3d1NjBlR3dueFd4R2l1SUp6MzFVWnV0dGhzNHRJWEpVVmM1bDc=${this.id}:${this.secret}`,
//         'Content-Type': 'application/json;charset=utf-8',
//       }),
   
  constructor(private _http: HttpClient) {}

  getCourses(url: string): Observable<Course[]> {
    return this._http.get<Course[]>(url)
    // .pipe(
    //   map(res => <Course>res)
    // );
  }

  getRegisteredLearners(): Observable<Learner[]> {
    return this._http.get<Learner[]>(this.learners_url);
  }

  addLearner(learner:Learner): Observable<Learner>{
    return this._http.post<Learner>(this.learners_url, learner, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
}
