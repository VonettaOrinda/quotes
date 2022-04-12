import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent implements OnInit {
  numberOfLikes: number = 0;
  numberOfDislikes:number=0;

  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick() {
    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
