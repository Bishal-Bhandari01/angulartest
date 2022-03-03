import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveformComponent implements OnInit {

  Form: FormGroup = new FormGroup({});
  // submitted: boolean = false;

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.Form = this.form.group({
      firstname: [undefined, [Validators.required, Validators.maxLength(10),Validators.minLength(2)]],
      lastname: [undefined, [Validators.required, Validators.maxLength(10),Validators.minLength(2)]],
      email:[undefined, [Validators.required, Validators.maxLength(40)]],
      password:[undefined, [Validators.required, Validators.maxLength(16),Validators.minLength(8)]]
    });
  }

  get forms():{[key:string]:AbstractControl}{
    return this.Form.controls;
  }

  onSubmitForm(form: any): void {
    // this.submitted=true;
    if(this.Form.valid){
      console.log(form.value);
      this.Form.reset();
    }

  }

}
