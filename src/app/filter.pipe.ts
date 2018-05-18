import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
   })
  
   export class FilterPipe implements PipeTransform {
   
      transform(projects: any, term: string, prop: string): any {
        //check if search is undefined
        console.log("Searching for: ", term);
        if (!term){
          return projects;
        } 
        prop = "full_name"
       return projects.filter((project)=>
       project[prop].toString().toLowerCase().includes(term.toLowerCase()));
      }
  }
  
   

   