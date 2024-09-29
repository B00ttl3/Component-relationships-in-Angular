import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // The 2 below this are the examples of data binding from parent component to child component
//  @Input() postListTitle: string = '';
//  @Input() postIsLogin: boolean = false;

  childMessage: string = 'Hello from Child Component';
  postCount: number = 0;
}
