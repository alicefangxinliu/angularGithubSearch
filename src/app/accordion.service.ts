import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor() {
    console.log("accordion service init...");}
  
  testFunction(){
    console.log("testing here...");
    var accordions = 
    <HTMLElement[]><any>document.getElementById("accordion-button");
    for (var i = 0; i < 30; i++){
      accordions[i].click = function(){
      console.log("clicked!");
      var content =  <HTMLElement>this.nextElementSibling;
      if (content.style.maxHeight){
          //accordion is open, we need to close it
          content.style.maxHeight = null;
      }
      else{
          //it is closed
          content.style.maxHeight=content.scrollHeight+ "px";
      }
    }
}
  }
}
