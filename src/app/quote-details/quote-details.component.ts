import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';




@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {
  [x: string]: any;
  // @Input()anyQuotes = new this['Quotes'];
  @Output() isComplete = new EventEmitter<boolean>();
  

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
    // this.Quotes.emit(complete)
  
    
   }

  

 
  
  constructor() { }

  ngOnInit() {
  }

}
