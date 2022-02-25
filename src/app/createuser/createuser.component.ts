import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
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
    private userserviceService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.initform();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userforms.controls;
  }

  initform() {
    this.userforms = this.form.group({
      name:[undefined],
      email:[undefined],
      password:[undefined],
      mobileNumber:[undefined]
    });
  }

  Adduser(user:any){
    this.userserviceService.adduser(user).subscribe(
      (response:any) =>{
        console.log(response);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
