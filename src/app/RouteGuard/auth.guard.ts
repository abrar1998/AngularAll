import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthserService } from '../Services/authser.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _ser = inject(AuthserService);
  const _route = inject(Router);
  if(_ser.IsLoggedIn)
  {
    return true;
  }
  else
  {
    var result = _ser.ShowConfirmation();
    if(result)
    {
      _route.navigate(['/login'])
    }
    else
    {
      _route.navigate(['/'])
    }
  }
 
  return false
      
 
  
};
