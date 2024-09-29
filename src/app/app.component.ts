import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AppNavbar, 
    HeaderComponent,
    PostsListComponent,
    FormsModule, 
    NgIf, 
    NgTemplateOutlet, 
    NgFor, 
    NgSwitch, 
    NgSwitchCase, 
    NgSwitchDefault, 
    NgStyle,
    NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  // from Parent component to child component
  // appPostTitle: string = 'Post 1';
  // appIsLogin: boolean = false;

  // From child component to Parent component
  @ViewChild (PostsListComponent) childMessage: any;
  message: string = '';

  constructor () {
    console.log(this.childMessage);
  }

  ngAfterViewInit() {
    console.log(this.childMessage);
    this.message = this.childMessage.childMessage;
    
  }

}
