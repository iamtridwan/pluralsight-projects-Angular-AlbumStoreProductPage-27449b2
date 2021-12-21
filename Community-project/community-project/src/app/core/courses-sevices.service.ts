import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Learner } from '../models/learner';

@Injectable({
  providedIn: 'root',
})
export class CoursesSevicesService {
  learners_url = '../assets/learners.json';

  headers = new HttpHeaders({
    Accept: 'application/json, text/plain, */*',
    'Authorization:':
      'Basic eW9LcVZldklWbUlIeGdhdmd0YWFOTGI3cWlwSGdQaU96VVNMNmZHSjoJM2RwQ05tRVI1aUJabUdabldoNnNCTXBwM0FOdjBpOXA5ZjBRc2dRWENZeGpra3RQU0xES0JORlRjV2FzOWdITVdrSE9RY25BRXhmanA5eU96eUNqbGZUS3NEd3d1NjBlR3dueFd4R2l1SUp6MzFVWnV0dGhzNHRJWEpVVmM1bDc=',
    'Content-Type': 'application/json;charset=utf-8',
  });

  constructor(private _http: HttpClient) {}

  getCourses(url: string): Observable<[]> {
    return this._http.get<[]>(url);
  }

  getRegisteredLearners(): Observable<any> {
    return this._http.get<any>(this.learners_url, {
      headers: {
        "Accept": 'application/json, text/plain, */*',
        "Authorization":
          "Basic eW9LcVZldklWbUlIeGdhdmd0YWFOTGI3cWlwSGdQaU96VVNMNmZHSjoJM2RwQ05tRVI1aUJabUdabldoNnNCTXBwM0FOdjBpOXA5ZjBRc2dRWENZeGpra3RQU0xES0JORlRjV2FzOWdITVdrSE9RY25BRXhmanA5eU96eUNqbGZUS3NEd3d1NjBlR3dueFd4R2l1SUp6MzFVWnV0dGhzNHRJWEpVVmM1bDc=",
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Credentials": "true"
      },
    });
  }

  // handleError(error: string):string{
  //   return catchError(error)

  // }
}
