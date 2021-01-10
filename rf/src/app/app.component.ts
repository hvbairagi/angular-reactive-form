import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PasswordValidator } from './shared/paassword.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _registrationService: RegistrationService
  ) {}

  registrationForm: FormGroup;

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
        password: [''],
        confirmPassword: [''],
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
    return this.registrationForm.get('alternateEmails') as FormArray;
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
