import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Posts } from "./Posts";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) {
  }

  getData() {
  	return this._http.get<Posts[]>('http://jsonplaceholder.typicode.com/posts');
  }

   getDataId(id) {
  	return this._http.get<Posts[]>('http://jsonplaceholder.typicode.com/posts/'+id);
  }
}
