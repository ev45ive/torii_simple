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
      <li class="list-group-item" *ngFor="let task of tasks">
        {{task.name}}
        <button [routerLink]="['/task-details', task.id]" class="float-right">Details</button>
      </li>
    </ul>
    
    <hr>
    <input class="form-control" placeholder="Nazwa zadania" 
      (keyup.enter)="addTask(taskName)" [(ngModel)]="taskName">
  `,
  styles: []
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  project = {}

  tasks

  taskName = ''

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

  // Zapisujemy nowe zadanie
  addTask(name){
    let projectId = this.project['id']

    // Resetujemy pole taskName
    this.taskName = ''

    // Tworzymy nowe Zadanie - 
    let newTask = {
      name: name,
      // Zadanie musi miec wskazanie na Projekt w ktorym je dodajemy!
      projectId: projectId
    }
    this.http.post('http://localhost:3000/tasks/', newTask)
    .subscribe( () => {
      // Odswiezamy liste po dodaniu zadania
      this.getProjectTasks(projectId)
    })
  }
}
