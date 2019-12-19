import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Posts } from "./Posts";
import { Coment } from "./coment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fecha$ = new EventEmitter();

  constructor(private _http:HttpClient) {
  }

  getData() {
  	return this._http.get<Posts[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getDataId(id) {
  	return this._http.get<Posts[]>('http://jsonplaceholder.typicode.com/posts/'+id);
  }

  getDataComent(id) {
  	return this._http.get<Coment[]>('https://jsonplaceholder.typicode.com/comments?postId='+id);
  }

}
