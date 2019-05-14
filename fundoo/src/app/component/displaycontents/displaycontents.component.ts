import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycontents',
  templateUrl: './displaycontents.component.html',
  styleUrls: ['./displaycontents.component.scss']
})
export class DisplaycontentsComponent implements OnInit {
  color: any;

  constructor() { }
  flag=true;
  ngOnInit() 
  {}
  
  ChangeColor(color)
  {
    this.color=color;
    console.log(this.color,"change color");
  }
}
