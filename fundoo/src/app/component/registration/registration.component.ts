import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // registerForm: FormGroup;
  //   submitted = false;

    constructor(){}
  //constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required]});
  }

}
  // // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  // onSubmit() 
  // {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) 
  //     {
  //         return;
  //     }

  //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  // }



