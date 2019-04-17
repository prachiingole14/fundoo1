import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'fundoo';
  model: any = {};
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  // myForm: FormGroup;

  // ngOninit() {
  //   this.myForm = new FormGroup({
  //     'name': new FormControl(null, Validators.required),
  //     'policyNo': new FormControl(null, Validators.minLength(5))
  //     // the rest of inputs with the same approach
  //   });
  // }

  // onSubmit() {
  //   // when submit the form do something
  // }

  
}


