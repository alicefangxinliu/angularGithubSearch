import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectService } from './project.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardComponent } from './card/card.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdfilterPipe } from './idfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CardComponent,
    FilterPipe,
    IdfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
