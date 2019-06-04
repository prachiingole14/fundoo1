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
 
    dialog: any;
  
    constructor() {}
    flag=true;
    @Input() childMessage: string;
    
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
      if(this.title.value == '' || this.description.value == '')
      {
        //this.flag = !this.flag
        console.log("all fileds are mendetary....!")
      }
    } 

    //   this.model={
    //     "title":this.title.value,
    //     "description":this.description.value,
    //     //"color":this.color.value, 
    //     //"image":this.image.value
    //   }
     
    //   let status= this.s_note.addNotes(this.model)
    //     status.subscribe(res=>{
    //     console.log(res);
    //   });

    //   this.submit=console.log(this.title.value,
    //                           this.description.value,
    //                           this.color.value,
    //                           this.image.value)
    // }

    ChangeColor(color)
    {
      this.color=this.color;
      console.log(this.color,"change color");
    }

    openDialog()
    {
       this.dialog.open(EditLabelComponent)
    }

    titleError()
    {
      return this.title.hasError('required')?'':''
    }

    descriptionError()
    {
      return this.description.hasError('required')?'':''
    }

}