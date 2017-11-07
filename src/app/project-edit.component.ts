import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-project-edit',
  template: `
    <p>
      Project-edit works!
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
      <button (click)="update()">Update</button>
    </div>
    <div>
      <button routerLink="/">Wroc do listy</button>
    </div>
  `,
  styles: []
})
export class ProjectEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  project = {}
  
  update(){    
    this.http.put('http://localhost:3000/projects/'+ this.project['id'], this.project)
    .subscribe( project => {
      this.project = project
    })
  }

  ngOnInit() {
    this.project['id'] = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3000/projects/'+ this.project['id'])
    .subscribe( project => {
      this.project = project
    })
  }

}
