import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserService {
  constructor(private _route:Router) { }
  myUsers = [
    {email:"admin@gmail.com",
      password:"1234"
    },
    {email:"admin1998@gmail.com",
      password:"1234"
    }
  ]
  public IsLoggedIn = false;
  UserLogin(myemail:any, mypassword:any, myrole:any)
  {
    console.log(myemail);
    console.log(mypassword);
    let result = this.myUsers.find((x) => x.email === myemail && x.password === mypassword);
     if(result)
      {
        sessionStorage.setItem('Role',myrole);
        this.IsLoggedIn = true;
        // console.log(sessionStorage.getItem('Role'));
        // this._route.navigate(['/']);
        if(myrole == 'Admin')
          {
            this. _route.navigate(['/admin']);
          }
          else if(myrole == 'Student')
          {
            this._route.navigate(['/student']);
          }
          else
          {
            this._route.navigate(['/']);
          }
      }
      else
      {
        alert("Invalid Credentials.");
      }
  }
  LogOut(){
    this.IsLoggedIn=false;
  }
  //method for canActivate Guard
  ShowConfirmation():boolean
  {
    const result = confirm("Please Login First");
    return result;
  }
  //method for canDeactivate Guard
  WanaExitOrStay():boolean
  {
    let result = confirm("Are you Sure Want to Leave this Page , Without Saving Your Details");
    return result;
  }


}
