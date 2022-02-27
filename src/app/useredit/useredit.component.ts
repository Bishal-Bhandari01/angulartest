import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  editform: FormGroup = new FormGroup({});

  routetable:string='';

  constructor(
    private router: ActivatedRoute,
    private forms:FormBuilder,
    private userservice: UserserviceService
  ) { }

  ngOnInit(): void {
    this.initform();
    this.router.params.subscribe((params)=>{
      this.routetable = params['id'];
    })
  }

  get form():{ [key: string]: AbstractControl}{
    return this.editform.controls;
  }

  initform(): void {
    this.editform = this.forms.group({
      name:[undefined],
      email:[undefined],
      password:[undefined],
      mobileNumber:[undefined]
    })
  }

  edit(routetable:string,edits:any){
    this.userservice.put(routetable,edits).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
