import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, UntypedFormArray } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { RegistrationService } from './registration.service';
import { PasswordStrengthValidator } from './shared/password2.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private _registrationService: RegistrationService
  ) {}

  registrationForm: UntypedFormGroup;

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator(/password/),
          ],
        ],
        email: [''],
        subscribe: [false],
        password: ['', [Validators.required, PasswordStrengthValidator]],
        confirmPassword: ['', [Validators.required, PasswordStrengthValidator]],
        address: this.fb.group({
          city: [''],
          state: [''],
          postalCode: [''],
        }),
        alternateEmails: this.fb.array([]),
      },
      { validator: PasswordValidator }
    );

    this.registrationForm
      .get('subscribe')
      .valueChanges.subscribe((checkedValue) => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as UntypedFormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService
      .register(this.registrationForm.value)
      .subscribe((response) => {
        console.log('Success!', response);
        (error) => console.log('Error!', error);
      });
  }

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456',
      },
    });
  }

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Harsh'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });
}
