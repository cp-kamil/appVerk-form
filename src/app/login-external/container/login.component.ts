import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appPatterns } from 'src/app/shared/app.constants';
import { validateAllFormFields } from 'src/app/shared/validate-all-form-fields.ts/validate-all-form-fields';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'pekao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public form!: UntypedFormGroup;
  protected emailForm!: AbstractControl
  protected passwordForm!: AbstractControl
  protected readonly title = "Zadanie rekrutacyjne"
  protected readonly logIn = "Zaloguj"

  constructor(private fb: UntypedFormBuilder, private router: Router, private authService: AuthService) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public submit($event: Event): void {
    if (this.form.invalid) {
      $event.preventDefault();
      validateAllFormFields(this.form);
      return;
    }
    this.authService.loginUser$.next(true)
    this.router.navigate(['/dashboard']);
  }

  private createForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern(appPatterns.validationPatterns.email)])],
      password: ['', Validators.required],
    });
    this.emailForm = this.form.controls.username
    this.passwordForm = this.form.controls.password
  }
}
