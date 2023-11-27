import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from 'src/app/models/interfaces/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  public authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private ticketService: TicketService,
  ) {
    this.authForm = this.builderForm();
  }

  public onSubmit(): void{
    if (this.authForm.value && this.authForm.valid) {
      this.userService.authUser(this.authForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: UserModel) => {
          if (response) {
            console.log(response);
            this.ticketService.setUser(response);
            this.router.navigate(['/painel-de-carros'])
          }
        },
      });
    }
  }

  private builderForm(): FormGroup {
    return this.fb.group ({
      login: new FormControl({value: '', disabled: false}, Validators.compose ([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])),
      password: new FormControl({value: '', disabled: false}, Validators.compose([
        Validators.required,
        Validators.minLength(4),
      ]))
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
