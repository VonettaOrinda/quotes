// import { Quote } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  Quoted= new Quotes( 0,"","","","",0,0);
  @Output() add= new EventEmitter<Quotes>()
  

  addQuote(){
    this.add.emit(this.Quoted);
    this.Quoted= new Quotes (0,"","","", "",0,0);
  }

  constructor() { }

  ngOnInit() {
  }

}
