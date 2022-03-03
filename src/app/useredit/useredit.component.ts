import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserResponseModel } from '../Models/userResponse.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  editform: FormGroup = new FormGroup({});

  routetable:any={};

  user: UserResponseModel = {
    id: undefined,
    name: undefined,
    password: undefined,
    email: undefined,
    mobileNumber: undefined,
    dob: undefined,
    contacts: []
  };


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

  // initContacts(){
  //   (this.editform.get('contact') as FormArray).push() {

  //   }
  // }

  get form():{ [key: string]: AbstractControl}{
    return this.editform.controls;
  }

  initform(): void {
    this.editform = this.forms.group({
      name:[this.user.name,undefined, Validators.required],
      password:[this.user.password,undefined, Validators.required],
      dob:[this.user.dob,undefined, Validators.required],
      age:[undefined, Validators.required],
      email:[this.user.email,undefined, Validators.required],
      mobileNumber:[this.user.mobileNumber,undefined, Validators.required]
    })
  }


  edit(edits:any){
    if(this.editform.valid){
      this.userservice.updateUser(this.routetable,edits).subscribe(
        (response) => {
          console.log(response);
          this.editform.reset();
        },
        error =>{
          console.error(error);
        }
      )
    }
  }

}
