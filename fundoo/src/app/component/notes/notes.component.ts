import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit
{
    color: any;

    constructor() {}
    flag=false;

    ngOnInit() {}

    ChangeColor()
    {
      console.log("change color")
    }
}