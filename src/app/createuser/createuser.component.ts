import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  userforms: FormGroup = new FormGroup({});

  constructor(
    private form: FormBuilder,
    private userserviceService: UserserviceService,
  ) { }

  ngOnInit(): void {
    this.initform()
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userforms.controls;
  }

  convertDateToAge() {
    var date = this.userforms.value.dob;
    var year = new Date(date);
    var timeDiff = Math.abs(Date.now() - year.getTime());
    let age = Math.floor((timeDiff/(1000*3600*24*365)))
    this.userforms.patchValue({age:age})
  }

  initform() {
    this.userforms = this.form.group({
      name:[undefined, Validators.required],
      email:[undefined,Validators.required],
      dob:[undefined,Validators.required],
      age:[undefined],
      password:[undefined,Validators.required],
      mobileNumber:[undefined,Validators.required],
      contacts: new FormArray([])
    });
    this.initContacts();
  }

  get getContact(): FormArray {
    return (this.userforms.get('contacts') as FormArray);
  }

  initContacts(){
    (this.userforms.get('contacts') as FormArray).push(
      this.form.group({
        mobileNumber:[undefined],
        email:[undefined]
      })
    )
  }

  Adduser(user:any){
    console.log('hello', this.userforms.valid);
    if(this.userforms.valid){
      this.userserviceService.adduser(user).subscribe(
        (response:any) => {
          console.log(response);
          this.userforms.reset();
        },
        error =>{
          console.error(error);
        }
      );
    }
  }

  remove(i:number){
    (this.userforms.get('contacts') as FormArray).removeAt(i);
  }

}

