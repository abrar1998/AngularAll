import { CanDeactivateFn, Router } from '@angular/router';
import { RegistrationComponent } from '../Components/registration/registration.component';
import { inject } from '@angular/core';
import { AuthserService } from '../Services/authser.service';

export const deactiGuard: CanDeactivateFn<RegistrationComponent> = (component, currentRoute, currentState, nextState) => {
  console.log(component);
  const _route = inject(Router);
  const myForm = component.regFrom;
  if(myForm.touched || myForm.dirty)
  {
    return confirm("Are you Sure Want to Leave this Page , Without Saving Your Details")?true:false;
  }
  return true;
};
