import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent implements OnInit {
  @Input() title: String;
  @Input() content: String;
  @Input() date: String;

  counter: number = 0;

  constructor() {}

  ngOnInit() {}

  isNegative() {
    if (this.counter >= 0) {
      return false;
    } else {
      return true;
    }
  }

  upVote() {
    this.counter = this.counter += 1;
    console.log("helloooooooo upvote");
  }

  downVote() {
    this.counter = this.counter -= 1;
    console.log("helloooooooo Downvote");
  }
}
