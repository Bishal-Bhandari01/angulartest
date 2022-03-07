import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResponseModel } from '../Models/UserResponse.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss'],
  providers: [UserserviceService]
})
export class DetailviewComponent implements OnInit {

  id:any;
  userdetail:UserResponseModel= {
    id: undefined,
    name: undefined,
    email: undefined,
    mobileNumber: undefined,
    password: undefined,
    dob: undefined,
    contacts: []
  }

  constructor(
    private router:ActivatedRoute,
    private userservice: UserserviceService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.id = res['id'];
    })
    this.userservice.userbyid(this.id).subscribe((param)=>{
      this.userdetail = param;
    })
  }

}
