import { Component, OnInit } from '@angular/core';

import { Post } from '../post.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: ServiceService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .getPosts()
      .pipe(
        map((data) =>
          data.filter((item) => {
            return item.active == true;
          })
        )
      )
      .subscribe((filterdata) => {
        this.posts = filterdata;
      });
  }
}
