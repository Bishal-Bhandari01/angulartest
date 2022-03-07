import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponseModel } from '../Models/UserResponse.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  editform: FormGroup = new FormGroup({});

  routetable:any={};

  user: UserResponseModel = new UserResponseModel();


  constructor(
    private activatedrouter: ActivatedRoute,
    private forms:FormBuilder,
    private userservice: UserserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initform();
    this.activatedrouter.params.subscribe((params)=>{
      this.routetable = params['id'];
      this.getUserData();
    })
  }

  convertDateToAge() {
    var date = this.editform.value.dob;
    var year = new Date(date);
    var timeDiff = Math.abs(Date.now() - year.getTime());
    let age = Math.floor((timeDiff/(1000*3600*24*365)))
    this.editform.patchValue({age:age})
  }

  get form():{ [key: string]: AbstractControl}{
    return this.editform.controls;
  }

  initform(): void {
    this.editform = this.forms.group({
      name:[this.user.name],
      password:[this.user.password],
      dob:[this.user.dob],
      age:[undefined],
      email:[this.user.email,undefined],
      mobileNumber:[this.user.mobileNumber],
      contacts: new FormArray([])
    })
    this.initContact();
  }

  get getContact(): FormArray {
    return (this.editform.get('contacts') as FormArray);
  }

  initContact(){
    (this.editform.get('contacts') as FormArray).push(
      this.forms.group({
        mobileNumber:[undefined],
        email:[undefined]
      })
    )
  }

  getUserData(){
    this.userservice.getUserDetailById(this.routetable).subscribe((users:any)=>{
      this.setUserData(users);
      console.log(users)
    },
    error => {
      console.error(error)
    })
  }

  setUserData(users: UserResponseModel){
    this.editform.patchValue({
      name: users.name,
      email: users.email,
      dob: users.dob,
      password: users.password,
      mobileNumber: users.mobileNumber,
    })
    if(users.contacts.length == 0) {
      return;
    }
    users.contacts.forEach((value,i) => {
      (this.editform.get('contacts') as FormArray).push(
        this.forms.group({
          mobileNumber: value?.mobileNumber,
          email: value?.email
        })
      )
    });
  }

  edit(edits:UserResponseModel){
    if(this.editform.valid){
      this.userservice.updateUser(this.routetable,edits).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/home/users']);
        },
        error =>{
          console.error(error);
        }
      )
    }
  }

  remove(i:number){
    (this.editform.get('contacts') as FormArray).removeAt(i);
  }

}
