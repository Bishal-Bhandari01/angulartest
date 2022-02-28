import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss'],
  providers: [UserserviceService]
})
export class DetailviewComponent implements OnInit {

  userdetailid:any= {};
  userdetail:any= '';

  constructor(
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.userdetailid = res['id'];
    })
    this.router.queryParams.subscribe((params) => {
      this.userdetail = params;
    })
  }

}
