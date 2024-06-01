import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './multiple-forms.component.html',
  styleUrl: './multiple-forms.component.css'
})
export class MultipleFormsComponent {

step:any=1;

NextForm() {
this.step += 1;
}
PreviousForm() {
this.step -=1;
}

myForm:FormGroup;

constructor(){
  this.myForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required]),
    address:new FormControl('',[Validators.required]),
    gender:new FormControl('', [Validators.required]),
    comment:new FormControl('', [Validators.required]),
  });
}

FormSubmitDetails()
{
  console.log(this.myForm.value);
}



}
