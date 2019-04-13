import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/services/RegistrationSrvice/register';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
register:Register;
  constructor() { }

  ngOnInit() {}
  

}
