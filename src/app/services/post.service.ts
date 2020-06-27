import { DataService } from './data.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

 // private url='https://jsonplaceholder.typicode.com/posts';
  constructor(http:Http) {
    super('https://jsonplaceholder.typicode.com/posts',http)
   }
  //  getPosts(){
  //   return this.http.get(this.url)
  //   .pipe(catchError(this.handelError));
  //  }

  //  createPost(post){
  //    return   this.http.post(this.url,post)
  //    .pipe(
  //      catchError(  this.handelError   ))
     
  //  }
  //  updatePost(post){
  //   return this.http.put(this.url+'/'+post.id,post)
  //   .pipe(catchError(this.handelError));

  //  }

  //  deletePost(element){
  //   return this.http.delete(this.url+'/'+element.id)
  //   .pipe(
  //       catchError(this.handelError)
  //   )
    
    
  //  }
  //  private handelError(error:Response) {
  //   if(error.status===400){
  //     return Observable.throw(new BadInput);
  //   }
  //    if (error.status==404) {
  //      return Observable.throw(new NotFoundError);
  //    }
  //    return Observable.throw(new AppError);
  //  }
  
}
