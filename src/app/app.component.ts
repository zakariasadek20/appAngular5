import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'appangular5';
  // body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

  IsSelected;
  // post={
  //     title:"lorem ipsum",
  //     isFavorite:false
  // }
  // onFavoriteChanged(args){
  //     console.log("Favorite changed",args);
  // }

  // courses=['Laravel','Angular','symfony'];
  
    //ViewCourse="Laravel";
    

    courses;

    addCourse(){
      this.courses.push({id:6,title:"ReactJs"});

    }
    updateCourse(cours){
      cours.title="Updated";
    }
    removeCourse(cours){
      let index=this.courses.indexOf(cours);
      this.courses.splice(index,1);
    }
    loadCourses(){
      this.courses=[
        {id:1,title:"Laravel"},
        {id:2,title:"Angular"},
        {id:3,title:"VusJs"},
        {id:4,title:"Symfony"},
        {id:5,title:"AdonisJS"}
      ];
    }
    trackCourse(index,course){
        return course? course.id : undefined;
    }

    myFavorite(){
      this.IsSelected=!this.IsSelected;
    }



    personne={

      nom:'Sadek',
      tel:'0676977691',
      adresse:{
        ville:'berchiid',
        code:1200
      }
    }
}
