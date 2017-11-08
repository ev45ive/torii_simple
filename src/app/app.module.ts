import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list.component';
import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { ProjectCreateComponent } from './project-create.component';
import { ProjectEditComponent } from './project-edit.component';
import { ProjectDetailsComponent } from './project-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
