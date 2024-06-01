import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  regFrom = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(6)]),
    address:new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    age:new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
  });


  Register() {
    console.log(this.regFrom.value);
    
    }

    


}


