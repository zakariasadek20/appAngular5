import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { GetFolowersService } from './services2/get-folowers.service';
import { PostService } from './services/post.service';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { TextFormatDirective } from './text-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpModule} from '@angular/http'
  import { from } from 'rxjs';
import { GithubFolowersComponent } from './github-folowers/github-folowers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFolowersComponent } from './profile-folowers/profile-folowers.component';
import { NavbarComponent } from './navbar/navbar.component';

// const routes:Routes=[
//     {
//       path:"",
//       component:HomeComponent
//     },
//     {
//       path:"followers",
//       component:GithubFolowersComponent
//     },
//     {
//       path:"followers/:username",
//       component:ProfileFolowersComponent
//     },
//     {
//       path:"posts",
//       component:PostsComponent
//     },
//     {
//       path:"**",
//       component:PageNotFoundComponent
//     }
// ]

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    TextFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFolowersComponent,
    PageNotFoundComponent,
    ProfileFolowersComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
    // RouterModule.forRoot(routes)
  ],
  providers: [CoursesService,EmailService,PostService,GetFolowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
