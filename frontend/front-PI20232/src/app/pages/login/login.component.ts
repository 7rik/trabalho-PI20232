import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.authForm = this.builderForm();
  }

  private builderForm(): FormGroup {
    return this.fb.group ({
      username: new FormControl({value: '', disabled: false}, Validators.compose ([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])),
      password: new FormControl({value: '', disabled: false}, Validators.compose([
        Validators.required,
        Validators.minLength(4),
      ]))
    })
  }

  public onSubmit(){
    console.log(this.authForm.get('password')?.errors)
    if(this.authForm.valid) {
      this.router.navigate(['/login']);
    }
  }
}
