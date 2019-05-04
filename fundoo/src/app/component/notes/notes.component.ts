import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit
{
  color:any;
    constructor() {}
    flag=true;
    ngOnInit() {}
   
    ChangeColor(color)
    {
      this.color=color;
      console.log(this.color,"change color");
    }

    reverse(){
      this.flag = !this.flag
    }

}