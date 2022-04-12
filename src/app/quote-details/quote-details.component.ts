import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';




@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {
  // @Input() quotes: Quote;
  // @Output() isComplete = new EventEmitter<boolean>();

  // quoteDelete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }
  
  constructor() { }

  ngOnInit() {
  }

}
