import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collabrator',
  templateUrl: './collabrator.component.html',
  styleUrls: ['./collabrator.component.scss']
})
export class CollabratorComponent implements OnInit 
{
  flag=true;
  constructor() { }

  ngOnInit() {
  }

  cancle()
  {
    this.flag = !this.flag;
    console.log("back to")
  }
}
