import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { FollowersComponent } from './followers/followers.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CoursesComponent, ResumePipe, FavoriteComponent, PanelComponent, InputFormatDirective, ContactFormComponent, SignupFormComponent, PostsComponent, FollowersComponent, NavBarComponent],
  //templateUrl: './app.component.html',
  template: '<nav-bar></nav-bar><router-outlet></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'app-angular';
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  post = {
    title : "post Title",
    isFavorite : false
  }

  onFavChange(args : any) {
    console.log("fav changed" , args);
  }
}
