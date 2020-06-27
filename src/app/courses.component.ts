import { EmailService } from './email.service';
import { Component } from "@angular/core";
import {CoursesService} from "./courses.service"



@Component({
    selector:'courses',
    //templateUrl:'./courses.component.html'
   /* template:`
            <!--<h1 [style.color]="isActiveStyle ? 'blue': 'red'">  {{ title}}  </h1>-->
            <!--<img src="{{image}}" alt="{{title}}"> -->
            <!--<h1 [textContent]="title"></h1>-->
            <!--<img [src]="image" [alt]="title">-->


            <!--<button class="btn btn-primary" [class.active]="isTrue">Mon Button</button>-->
            <!--<div (click)="onClickDiv()">-->
            <!--<button (click)="onClick($event)" class="btn btn-primary">MOn Button</button>-->
            <!--</div>-->

            <input   [(ngModel)]="email" type="text" (keyup)="onKeyUp()">
            <p>{{email}}</p>
    `                        //keyup.esc=>button echap
                             //     .control=>button ctrl   ^
                             //keyup.control.arrowup=>ctrl+ | arrowUp
                             
                             */
        template:`
            <div class="container">
                <ul class="list-group">
                    <li class="list-group-item">Title:{{course.title |lowercase|uppercase }}</li>
                    <li class="list-group-item">Ratting: {{course.avis | number:'1.1-1'}}</li>
                    <li class="list-group-item">Students: {{course.participants}}</li>
                    <li class="list-group-item">Price: {{course.prix | currency:'MAD':'symbol':'3.1-1'}}</li>
                    <li class="list-group-item">ReleaseDate: {{course.PublicationDate | date:'yyyy-MM-dd'}}</li>

                </ul>
            </div>
        `
                
})
export class CoursesComponent{
    //isActiveStyle=true;
    //isTrue=true;
    title="la liste de mes cours";
    
    //image="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta";
    //courses;
    
    // onClick($event){
    //     $event.stopPropagation();//bach ykhdem lina ghi code dyal had button 7it fi7alat kanet had button wast un div et dak div fih event clik kikhdem event Click dyal Button et Click dyal Div
    //     console.log('button clicked',$event);
    // }
    // onClickDiv(){
    //     console.log("div cliked");
    // }
    
    
    // constructor(coursesService:CoursesService){
    //     this.courses=coursesService.getCourses();
    // }
    // getTitle(){
    //     return this.title;
    // }
    email:string="sadek@gmail.com";

    onKeyUp(email){
       // if($event.keyCode===13){//teste if key is enter
            
       //console.log("angular key");
    //    console.log(email.value);
       console.log(email);
        
        //}
    }



    //Pipes
    course={
        title:'Formation Complete Sur Angular',
        avis:'4.9562',
        participants:136,
        prix:950.38,
        PublicationDate:new Date(2017,11,21)
    }


}