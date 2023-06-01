import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginpage';
  username:string='';
  password:string='';
  
  Verify(){
    if(this.username=="Admin"&& this.password=="Admin"){
      console.log('Welcome')
      alert("Welcome Back")
    }
    else{
      console.log("Invalid Username/Password")
      alert("Invalid Username or Password, Please try again")
    }
  }

}
