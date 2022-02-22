import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRouteChange(){
    this.router.navigate(['/another-page']);
  }

  ontable(){
    this.router.navigate(['/table']);
  }

  onregister(){
    this.router.navigate(['/reactive-form']);
  }


}
