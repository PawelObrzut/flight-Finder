import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginEmail!: string;
  loginPassword!: string;
  signUpName!: string;
  signUpLastName!: string;
  signUpEmail!: string;
  signUpPassword!: string;

  constructor(private apiService: ApiService) {}

  @ViewChild('signUpForm') signUpForm!: NgForm;

  onInit() {}

  onSubmitLogin(formValues: any) {
    this.apiService.getUser(formValues).subscribe(response =>{
      document.cookie
    });
  }

  onSubmitSignUp(formValues: any) {
    this.apiService.registerUser(formValues).subscribe(response => console.log(response));
    this.signUpForm.resetForm();
  }
}
