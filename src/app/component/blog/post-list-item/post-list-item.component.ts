import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Post } from '../../../model/interface/post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, AfterViewInit {

  readonly WIDTH = 600;
  readonly HEIGHT = 300;


  @Input()
  post!: Post;


  constructor() { 
    
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  random(min: number, max: number): number {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  

  loveIt():void {
    this.post.loveIts+=1;
  }

  hateIt():void {
    this.post.loveIts-=1;
  }

  color(): string {
    if (this.post.loveIts < 0 ) return 'red';
    else if (this.post.loveIts > 0 ) return 'green';
    return 'grey';
  }

}
