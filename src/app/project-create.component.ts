import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-project-create',
  template: `
    <p>
      project-create works!
    </p>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" [(ngModel)]="project.name">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input class="form-control" [(ngModel)]="project.description">
    </div>
    <div>
      <button (click)="save()">Save</button>
    </div>
    <hr>
    <button routerLink="/">Wroc do listy</button>
  `,
  styles: [],
})
export class ProjectCreateComponent implements OnInit {

  project = {
    
  }

  save(){
    this.http.post('http://localhost:3000/projects/', this.project)
    .subscribe( project => this.project = {} )
  }

  constructor(private http: HttpClient){ }

  ngOnInit() {
  }

}
