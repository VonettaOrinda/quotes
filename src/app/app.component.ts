import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  addNewQuote(Quotes: any){
    this['quote'].push(Quotes)
  }


  constructor(){}
  
}


