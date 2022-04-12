// import { Quote } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  
  @Output() add= new EventEmitter<Quotes>()
  newQuote= new Quotes( 0,"","","","","",0,0);
  newQuotes: Quotes | undefined;
  

  
  // newQuote(newQuote: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }
  addQuote(){
    this.add.emit(this.newQuotes);
    
  }

  

  ngOnInit() {
  }

}
