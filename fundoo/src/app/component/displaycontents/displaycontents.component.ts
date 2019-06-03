import { Component, OnInit, Input } from '@angular/core';
import { EditLabelComponent } from '../edit-label/edit-label.component';



@Component({
  selector: 'app-displaycontents',
  templateUrl: './displaycontents.component.html',
  styleUrls: ['./displaycontents.component.scss']
})
export class DisplaycontentsComponent implements OnInit 
{
  color: any;
  
  @Input() childMessage: string;
  dialog: any;

  constructor() { }

  flag=true;

  ngOnInit() 
  {}
  
  ChangeColor(color)
  {
    this.color=color;
    console.log(this.color,"change color");
  }


  openDialog1() {
    this.dialog.open(EditLabelComponent)
    console.log("its work")
  }

}
