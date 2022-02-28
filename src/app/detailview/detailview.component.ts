import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss'],
  providers: [UserserviceService]
})
export class DetailviewComponent implements OnInit {

  userdetail: any = [];

  constructor(
    private userservice: UserserviceService
  ) {
    // this.name=this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
    this.listalluser();
  }

  listalluser() {
    this.userservice.listuserbyid().subscribe(
      (response) => {
        console.log(response);
        this.userdetail = response.users;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
