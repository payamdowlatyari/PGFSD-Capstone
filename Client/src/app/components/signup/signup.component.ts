import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'signup';
  showSignup: boolean | undefined;
  signupForm!: FormGroup;
  submitted = false;
  public loaded = true;


  firstname: string = '';
  lastname: string = '';
  accountNumber: string = '';
  username: string = '';
  password: string = '';
  password2: string = '';

  // constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }
 
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  generateID() {
    if (this.firstname === '' ||
      this.lastname === '' ||
      this.accountNumber === '') {
      alert('Please Enter Credentials');
      return;
    }
    let temp = this.firstname+this.lastname+this.accountNumber;
    let result = [];
    for(let i = 0; i<8; i++) {
      result.push(temp.charAt(Math.floor(Math.random() * temp.length)));
    }
    this.username = result.join('');
  }

  register() {
    if (this.firstname === '' ||
      this.lastname === '' ||
      this.accountNumber === '' ||
      this.username === '' ||
      this.password === '' || this.password2 === '') {
      alert('Please Enter Credentials!');
      return;
    }

    if (!(this.password === this.password2)) {
      alert('Entered login passwords do not match!');
      return;
    }

    let user = {
      id: this.accountNumber,
      firstname: this.firstname,
      lastname: this.lastname, 
      username: this.username,
      password: this.password,
    } as User

    this.userService.createUser(user).subscribe(
      message => {
        if (message.message === 'Successfully registered!') {
          let mySuccessMessage = message.message + '\n' + 'Press OK to login and enjoy the services.'
          if (confirm(mySuccessMessage)) {
            this.router.navigate(['login']);
          }
        } else {
          alert(message.message);
        }
      },
      error => console.log(error),
      () => {
        this.accountNumber = '';
        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.password = '';
        this.password2 = '';
      }
    )

  }

  // show()
  // {
  //   this.showSignup = true; // Show-Hide Modal Check
  // }
  
  // hide()
  // {
  //   this.showSignup = false;
  // }
  
  // ngOnInit() {
  //   this.signupForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //     firstname: ['', [Validators.required]],
  //     lastname: ['', [Validators.required]]
  //   });
  // }

  // get f() { return this.signupForm.controls; }

  // onSubmit() {
  //   this.loaded = false;
  //   this.submitted = true;

  //   if (this.signupForm.invalid) {
  //     this.loaded = true;
  //     return;
  //   }
  //   if (this.submitted)
  //   {
  //     this.showSignup = false;
  //   }
  //   this.loginService.signup(this.signupForm.value).subscribe(
  //     (      res: any) => {
  //     this.showSignup = false;
  //     this.router.navigate(['/']);
  //     const loginValue = {
  //       firstname: this.signupForm.value.firstname, lastname: this.signupForm.value.lastname,
  //       password: this.signupForm.value.password, email: this.signupForm.value.email };
  //     console.log(loginValue);

  //     this.loginService.sendCredential(loginValue.email, loginValue.password).subscribe(
  //       (res: any) => {
  //       this.loaded = true;
  //       localStorage.setItem('loggatoUser', 'true');
  //     });
  //   }, (err: any) => {

  //     if (err.status == 400) {
  //       console.log(err);
  //     }
  //   });


  // }

}
