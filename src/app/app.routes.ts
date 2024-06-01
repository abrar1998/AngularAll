import { Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';
import { DynamicformsComponent } from './Components/dynamicforms/dynamicforms.component';
import { MultipleFormsComponent } from './Components/multiple-forms/multiple-forms.component';
import { UsersComponent } from './Components/users/users.component';
import { authGuard } from './RouteGuard/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { deactiGuard } from './RouteGuard/deacti.guard';
import { ParentComponent } from './Components/parent/parent.component';
import { Child1Component } from './Components/parent/child1/child1.component';
import { Child2Component } from './Components/parent/child2/child2.component';
import { PageNotfoundComponent } from './Components/page-notfound/page-notfound.component';
import { canActiGuard } from './RouteGuard/can-acti.guard';
import { AboutComponent } from './Components/home/about/about.component';
import { ContactComponent } from './Components/home/contact/contact.component';
import { canMatchGuard } from './RouteGuard/can-match.guard';

export const routes: Routes = [
    {path:'', redirectTo:'/home',pathMatch:'full', title:'Home'},
    {path:'register', component:RegistrationComponent, canDeactivate:[deactiGuard], title:'Registration'},
    {path:'home', component:HomeComponent},
    {path:'dynamicform', component:DynamicformsComponent},
    {path:'multipleforms', component:MultipleFormsComponent},
    {path:'users', component:UsersComponent,canActivate:[authGuard]},
    {path:'login', component:LoginComponent, title:'Login'},
    //route for canActivateChild
    {path:'parent', component:ParentComponent,
        canActivateChild:[canActiGuard],
        children:[
            {path:'child1', component:Child1Component},
            {path:'child2',component:Child2Component}
        ]
    },

    {path:'about', component:AboutComponent},
    {path:'contact',component:ContactComponent},
    //add path for lazy loaded modules

    //if we want to use CanMatch route guard then path name must be soame
    // {path:'user', 
    //     canMatch:[canMatchGuard],
    //     loadChildren:()=> import('./MyModules/admin/admin.module').then((a)=>a.AdminModule),
    // },
    // {path:'user',
    //     loadChildren:()=> import('./MyModules/user/user.module').then((u)=> u.UserModule),
    // },

    //these will be redirected on the base of role of the login person
    {path:'admin', 
    
        loadChildren:()=> import('./MyModules/admin/admin.module').then((a)=>a.AdminModule),
    },
    {path:'student',
        loadChildren:()=> import('./MyModules/user/user.module').then((u)=> u.UserModule),
    },

    {path:'**', component:PageNotfoundComponent}

];
