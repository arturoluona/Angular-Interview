import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  title = 'Exercise1';

  lorems: string[] = [
  	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, laboriosam.",
  	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quibusdam deserunt, corporis officia molestias iste?",
  	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, facilis.",
  	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sunt, totam odio deserunt.",
  	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ea, commodi.",
 	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem nihil, nesciunt quas repudiandae accusamus iure recusandae unde.",
 	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore corporis pariatur nemo laboriosam dolor!",
 	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos!",
 	"Lorem ipsum dolor sit.",
  	"Lorem ipsum dolor sit amet, consectetur adipisicing."
  ];
}
