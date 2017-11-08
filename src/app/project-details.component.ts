import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'project-details',
  template: `
    <p>
      project-details works!
    </p>
    <h1>{{project.name}}</h1>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let task of tasks">{{task.name}}</li>
    </ul>
  `,
  styles: []
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  project = {}

  tasks

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.getProject(id)
    this.getProjectTasks(id)
  }

  // Pobieramy szczegoly Project
  getProject(id){
    this.http.get('http://localhost:3000/projects/'+ id)
    .subscribe( project => {
      this.project = project
    })
  }

  // Pobieramy liste Project -> Tasks
  getProjectTasks(id){
    this.http.get('http://localhost:3000/projects/' + id + '/tasks')
    .subscribe( tasks => {
      this.tasks = tasks
    })
  }
}
