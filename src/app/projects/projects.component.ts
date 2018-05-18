import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

import { FormsModule }   from '@angular/forms';

import { FilterPipe } from '../filter.pipe';
import { GitProject } from '../project';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl:'./projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {
  
  public projects = [];

  constructor(private projectService : ProjectService) {}

  ngOnInit() {
   this.projectService.getProjects()
    .subscribe(data => {
      this.projects = data.items;
      console.log(data.items);
    });
  
  }
}

