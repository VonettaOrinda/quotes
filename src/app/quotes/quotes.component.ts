import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';






@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
  

    

    new Quotes(1, 'Every positive thought is a silent prayer that will change your life','Author: Amazing me no Movement',0,0),
    new Quotes(2, 'Sometimes the bad things that happen in our lives put us directly on the path to the best thing that will ever happen to us','Author: Nicole Reed',0,0),
    new Quotes(3, 'She was unstoppable not because she did not have fairlures or doubt but because she continued on despite them','Author: Bea Taplin',0,0),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
