
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

import { FormsModule }   from '@angular/forms';

import { IdfilterPipe } from './idfilter.pipe';
import { GitProject } from '../project';
import { Subscriber } from 'rxjs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { AccordionService } from '../accordion.service';
@Component({
  selector: 'app-projects',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css'],
  
})

export class CardComponent implements OnInit {
 
  public projects = [];

  constructor(private projectService : ProjectService) {
    
  }

  ngOnInit() {
   this.projectService.getProjects()
    .subscribe(data => {
      this.projects = data.items;
    });
    //this.accordionService.testFunction();
  }

}

