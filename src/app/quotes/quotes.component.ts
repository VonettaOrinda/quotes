import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'; 


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[

    new Quote(
      1."Every positive thought is a silent prayer that will change your life", 'Author: Amazing me no Movement'
    new Date(2017,9,17)
    ),
    new Quote(
      2, 'Sometimes the bad things that happen in our lives put us directly on the path to the best thing that will ever happen to us'
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
