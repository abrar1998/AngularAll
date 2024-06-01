import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthserService } from '../../Services/authser.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
myform = new FormGroup({
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('', [Validators.required]),
  role:new FormControl('', [Validators.required])
});

constructor(private _ser:AuthserService){}
LoginDetails()
{
  this._ser.UserLogin(this.myform.value.email, this.myform.value.password, this.myform.value.role);
}

}
