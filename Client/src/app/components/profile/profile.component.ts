import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  sid: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  username: string = '';
  password: string = '';
  passwordType: string = 'password';

 constructor (private userService: UserService , private dataService: DataService){}

  ngOnInit(): void {

    let user = this.dataService.getUser();

    this.sid = (user.id).toString();
    this.username = user.username;
    this.password = user.password;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.phone = user.phone;
    this.address = user.address;
  }

  changePasswordType(){
      if(this.passwordType == 'password'){
        this.passwordType = 'text'
      }else{
        this.passwordType = 'password'
      }
    }

  updatePassword() {
    if (this.password == '') {
      alert('Please enter a password!');
      return;
    }
    this.userService
      .updatePassword(this.password, this.sid)
      .subscribe(
        message => {
          let user = this.dataService.getUser();
          user.password = this.password
          this.dataService.setUser(user);
          alert(message.message)
        },
        error => console.log(error)
      )
  }
}
