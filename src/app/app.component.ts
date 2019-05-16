import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "lab-one-blog";

  posts = [
    {
      postTitle: "Mon premier post",
      postContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
      temporibus voluptatibus vero quibusdam minus aperiam rerum veniam excepturi
      fuga nulla eveniet optio vel aut sit eligendi mollitia, commodi porro!
      Nulla, sequi porro!`,
      postDate: "05/05/2019, 11:00 AM",
      counter: 0
    },
    {
      postTitle: "Mon Second post",
      postContent: `Lorem ipsum dolor consectetur adipisicing elit. Quisquam
      temporibus voluptatibus vero quibusdam minus aperi veniam excepturi
      fuga nulla eveniet optio vel aut sit eligendi mollitia, commodi porro!
      Nulla, sequi porro!`,
      postDate: "05/10/2019, 11:00 AM",
      counter: 0
    },
    {
      postTitle: "Mon Troisieme post",
      postContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
      temporibus voluptatibus vero quibuit eligendi mollitia, commodi porro!
      Nulla, sequi porro!`,
      postDate: "05/16/2019, 11:00 AM",
      counter: 0
    }
  ];
}
