import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'angularpopup';
  showModal: boolean | undefined;
  signupForm!: FormGroup;
  submitted = false;
  public loaded = true;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }
 
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
  }
  
  hide()
  {
    this.showModal = false;
  }
  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.loaded = false;
    this.submitted = true;

    if (this.signupForm.invalid) {
      this.loaded = true;
      return;
    }
    if (this.submitted)
    {
      this.showModal = false;
    }
    this.loginService.signup(this.signupForm.value).subscribe(
      (      res: any) => {
      this.showModal = false;
      this.router.navigate(['/']);
      const loginValue = {
        firstname: this.signupForm.value.firstname, lastname: this.signupForm.value.lastname,
        username: this.signupForm.value.username, password: this.signupForm.value.password, 
        email: this.signupForm.value.email };
      console.log(loginValue);

      this.loginService.sendCredential(loginValue.username, loginValue.password).subscribe(
        (res: any) => {
        this.loaded = true;
        localStorage.setItem('loggatoUser', 'true');
      });
    }, (err: any) => {

      if (err.status == 400) {
        console.log(err);
      }
    });


  }

}
