import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = {
    id:'',
    name:'',
    address:'',
    class:'',
    age:''
  }

  constructor() { }
}
