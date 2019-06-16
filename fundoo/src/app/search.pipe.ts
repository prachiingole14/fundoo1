import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform 
{
  @Input() allcards;

 
  transform(data: any, allcards: any, defaultFilter: boolean): any 
  {
    if (!this.allcards)
    {
      return data;
    }

    if (!Array.isArray(data))
    {
      return data;
    }
  }

  
}
