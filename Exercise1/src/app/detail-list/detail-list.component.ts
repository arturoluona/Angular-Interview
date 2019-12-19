import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  lists: {id: string, description: string};

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.lists = {
      id: this.rutaActiva.snapshot.params.id,
      description: this.rutaActiva.snapshot.params.description
    };
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.lists.description = params.description;
        this.lists.id = params.id;
      }
    );
  }

}
