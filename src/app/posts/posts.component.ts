import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts :any[]=[];
  post :any={id:0,
           title:'',
          body:'',
          userId:''};

  constructor(private postService:PostService) {
    // https://jsonplaceholder.typicode.com/posts
   
   
   }

 ngOnInit(){
  this.getPost();
 }

 getPost(){
  this.postService.getAll()
  .subscribe(posts=>{  this.posts=posts },error=>{
    alert('erreur inattendu ');
    console.log(error);
    
  })
 }
createPost(){
  this.postService.create(this.post)
  .subscribe(newPost=>{
    //console.log(Response.json());
    this.post.id=newPost.id;
    this.posts.unshift(this.post);
   
    this.post={id:0,
      title:'',
     body:'',
     userId:''};
  },(error:AppError)=>{
    if(error instanceof BadInput){
      alert('merci de verifie vos information')
    }else{
      alert('erreur inattendu ');
    console.log(error);
    }
    
    
  })
}
status:boolean=true;
editPost(element){
  this.post=element;
  this.status=false;
}
//edite
updatePost(){
  this.postService.update(this.post).subscribe(()=>{
    this.post={id:0,
      title:'',
     body:'',
     userId:''};
     this.status=true;
  },error=>{
    alert('erreur inattendu ');
    console.log(error);
    
  })
  
}
deletePost(post){
//post.id=124;
  this.postService.delete(post)
  .subscribe(()=>
    {
    //console.log(response);
   let index:number=this.posts.indexOf(post);
   this.posts.splice(index,1);
  },(error : AppError)=>{ 
    if (error instanceof NotFoundError) {
      alert('ce post est deja supprime');
     // console.log('dddd');
      
    }else{
      alert('erreur inattendu ');
       console.log(error);
    }
    
   })
}


}
