import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  userforms: FormGroup = new FormGroup({});

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userforms = this.form.group({
      id:[''],
      name:[''],
      address:[''],
      class:[''],
      age:['']
    });
  }

}
