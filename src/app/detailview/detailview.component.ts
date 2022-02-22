import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {

  userdetail = {
    id:'001',
    name: 'Bishal',
    address: 'NPJ',
    age: '21'
  }

  constructor(
    // private router: Router,
  ) {
    // this.name=this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
  }
  name='';
  address='';
  age='';
}
