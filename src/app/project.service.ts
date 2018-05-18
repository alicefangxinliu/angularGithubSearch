import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitProject } from './project';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class ProjectService {
  private _url: string = "https://api.github.com/search/repositories?q=angular+language:angular";
  
  constructor(private http: HttpClient) {
    console.log("github service init...");
   } 
  
  getProjects() : Observable<GitProject[]>{
    console.log("getting projects...")
    return this.http.get<GitProject[]>(this._url);
  }
  
}