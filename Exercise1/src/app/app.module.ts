import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';



const routes: Route[] = [
  {path: 'posts', component: ListComponent},
  {path: 'post/:id', component: DetailListComponent},
  {path: "", redirectTo: "/posts", pathMatch: "full"},
  {path: "**", component: FourZeroFourComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailListComponent,
    FourZeroFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
