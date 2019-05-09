import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit
{
    color:any;
  image: any;
    constructor(private s_notes:NotesService) {}
    flag=true;
    ngOnInit() {}
    model: any = {};

    title=new FormControl(' ',[Validators.required,Validators.minLength(5), Validators.maxLength(30)]);
    description=new FormControl(' ',[Validators.required, Validators.minLength(7), Validators.maxLength(50)]);

    reverse()
    {
      if(this.title.value != '' && this.description.value != '')
      {
        this.flag = !this.flag
      }
    

      this.model={
        "title":this.title.value,
        "description":this.description.value,
        "color":this.color.value, 
        "image":this.image.value
      }

     
      let status= this.s_notes.addNotes(this.model)
      status.subscribe(res=>{
        console.log(res);
      })


    }

    ChangeColor(color)
    {
      this.color=color;
      console.log(this.color,"change color");
    }

    // reverse()
    // {
    //   this.flag = !this.flag
    // }

  titleError()
  {
    return this.title.hasError('required')?'':'It must be required in character format and size should be greater than 5 and less than 30 '
  }

  descriptionError()
  {
    return this.description.hasError('required')?'':'It must be required in character format and size should be greater than 7 and less than 50  '
  }
}