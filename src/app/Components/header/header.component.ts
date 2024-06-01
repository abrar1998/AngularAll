import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthserService } from '../../Services/authser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

constructor(public _ser:AuthserService){}
logout() {
  this._ser.LogOut();
  }

}
