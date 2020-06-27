import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Data2Service } from './data2.service';

@Injectable({
  providedIn: 'root'
})
export class GetFolowersService extends Data2Service {

  constructor(http:Http) { 
    super(http,'https://api.github.com/users/IDBRAHIMDEV/followers');
  }
}
