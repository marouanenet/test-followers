import { Routes } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilFollowerComponent } from './profil-follower/profil-follower.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "posts", component: PostsComponent },
    { path: "followers", component: FollowersComponent },
    { path: "followers/:id/:username", component: ProfilFollowerComponent },
    { path: "**", component: PageNotFoundComponent }
];
