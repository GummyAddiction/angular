import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Developer } from '../developer-model/developer';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {


  private baseUrl = 'http://localhost:3005/freelancers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor( private http: HttpClient,) {}

  getDevelopers(): Observable<Developer[]>{
    return this.http.get<Developer[]>(this.baseUrl)
  }


  getDeveloper(id: number): Observable<any>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Developer>(url);

  }
  updateDeveloper(developer: Developer){
    const url = `${this.baseUrl}/${developer.id}`;
    return this.http.put(url, developer).subscribe(data => {
      console.log(data);
    })
  }

  addDeveloper(developer: Developer){
    return this.http.post(this.baseUrl, developer).subscribe(data => {
      console.log(data);
    });
  }

  deleteDeveloper(id?: number){
    return this.http.delete<Developer>(`${this.baseUrl}/${id}`).subscribe(data => {
      console.log(data);
    });
  }


  searchDeveloper(term: string): Observable<Developer[]> {
    
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    const url = `${this.baseUrl}/?name=${term}}`;
    return this.http.get<Developer[]>(url);
  }
}
