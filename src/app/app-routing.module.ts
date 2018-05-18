import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'list', component: ProjectsComponent },
  { path: 'cards', component: CardComponent }
];

@NgModule({
  imports: [
   // CommonModuler
   RouterModule.forRoot(routes)
  ],
  exports:
  [ RouterModule ]
  //declarations: []
})
export class AppRoutingModule { }
