import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args): any {
    let newstring = value;
    if (args[0]) { //I want a fullstop
      newstring += ".";
    }
    if (args[1]==="Kyle"){
      newstring += " and Kyle is nice too.";
    }
    else if (args[1]=="Alice"){
      newstring += " and Alice is nice too.";
    }
    return newstring;
  }

}
