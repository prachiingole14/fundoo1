import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { Validators, FormControl } from '@angular/forms';
import { EditLabelComponent } from '../edit-label/edit-label.component';

const newLocal = 'This field is empty';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit
{
  //parentMessage = "app-displaycontents";
  // parentMessage = "fgfg"

    color:any;
    image: any;
    dialog: any;
    message: string;
  submit: void;

    constructor(private s_notes:NotesService) {}
    @Input() childMessage: string;
    flag=true;
    ngOnInit() 
    {
      //this.getAllCard()
    }
    
    // getAllCard()
    // {
    //   this.s_notes.getcard().subscribe(data=>{
    //     console.log('all note is ',data);
        
    //   },err=>{
    //     console.log('error in get note',err);
        
    //   })
    // }

    model: any = {};

    title=new FormControl(' ',[Validators.required]);
    description=new FormControl(' ',[Validators.required]);

    reverse()
    {
      if(this.title.value != '' && this.description.value != '')
      {
        this.flag = !this.flag
      }

      this.model={
        "title":this.title.value,
        "description":this.description.value,
        //"color":this.color.value, 
        //"image":this.image.value
      }
     
      let status= this.s_notes.addNotes(this.model)
        status.subscribe(res=>{
       // console.log(res);
      });

      // this.submit=console.log(this.title.value,
      //                         this.description.value,
      //                         this.color.value,
      //                         this.image.value)
    }

    ChangeColor(color)
    {
      this.color=color;
      console.log(this.color,"change color");
    }

    openDialog()
    {
       this.dialog.open(EditLabelComponent)
    }

    // reverse()
    // {
    //   this.flag = !this.flag
    // }

    // titleError()
    // {
    //   return this.title.hasError('required')?'':''
    // }

    // descriptionError()
    // {
    //   return this.description.hasError('required')?'':''
    // }

}