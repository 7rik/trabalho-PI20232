import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public authForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      username: new FormControl({value: '', disabled: false}, Validators.required),
      password: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }
  public onSubmit(){
    console.log(this.authForm.value)
  }
}
