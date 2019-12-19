import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent{

	@Input() id: number;
	userId:number;

  date: Date = new Date();

  coments = [];

  constructor(private _data: DataService) {  }

  getUserId(id) {  	
  	if (id && this.userId != id)
  	{
  		this.userId = id;
  		this._data.getDataComent(id).subscribe(data =>
  		{
  			this.coments = data;
  		});
  	}
  }

  fecha() {
    this._data.fecha$.emit('Last comment: '
      +this.date);
  }

}
