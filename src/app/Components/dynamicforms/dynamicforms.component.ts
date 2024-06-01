import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamicforms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule,RouterLink],
  templateUrl: './dynamicforms.component.html',
  styleUrl: './dynamicforms.component.css'
})
export class DynamicformsComponent {
  employeeForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.employeeForm = new FormGroup({
      employees: new FormArray([]),
    });
  }

  
  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }


  AddEmployees()
  {
    const employeeGroup = new FormGroup({
      name:new FormControl(),
      job:new FormControl()
    });
    this.employees.push(employeeGroup);
  }

  SubmitForm(){
    console.log(this.employeeForm.value)
  }

  //how to create form using formFormbuilder
  // myform = this.fb.group({
  //   name:this.fb.control('', [Validators.required])
  // })

}
