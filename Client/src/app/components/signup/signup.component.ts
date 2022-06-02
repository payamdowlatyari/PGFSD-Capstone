import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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
  loaded = true;
  firstname: string = '';
  lastname: string = '';
  accountNumber: string = '';
  username: string = '';
  password: string = '';
  password2: string = '';
 
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
          let mySuccessMessage = message.message + '\n' + 'Press OK to login into your portal.'
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
}
