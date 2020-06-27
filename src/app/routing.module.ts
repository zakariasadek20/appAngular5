import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFolowersComponent } from './profile-folowers/profile-folowers.component';
import { GithubFolowersComponent } from './github-folowers/github-folowers.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes=[
    {
        path:"",
        component:HomeComponent
      },
      {
        path:"followers",
        component:GithubFolowersComponent
      },
      {
        path:"followers/:id/:username",
        component:ProfileFolowersComponent
      },
      {
        path:"posts",
        component:PostsComponent
      },
      {
        path:"**",
        component:PageNotFoundComponent
      }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{

}