import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  
  id: number;
  posts = [];

  constructor(private _data: DataService,private activatedRoute: ActivatedRoute) {

  	this.id = activatedRoute.snapshot.params['id'];

  	this._data.getDataId(this.id).subscribe(data =>
  		{
  			this.posts = data;
  		});	
  }

}
