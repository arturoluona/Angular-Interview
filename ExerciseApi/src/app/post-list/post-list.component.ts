import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

	posts = [];

  constructor(private _data: DataService) { 
  	this._data.getData().subscribe(data =>
  		{
  			this.posts = data;
  		});	
  }



  

}
