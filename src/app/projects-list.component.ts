import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-projects-list',
  template: `
    <p>
      projects-list works!
    </p>
    <ul>
      <li *ngFor="let project of list">
        {{ project.name }}
        <button [routerLink]="['project-edit',project.id]">Edit</button>
      </li>
    </ul>

    <hr>
    <button routerLink="project-create">Utworz nowy</button>
  `,
  styles: [],
})

export class ProjectsListComponent implements OnInit {

  // tu bedzie nasza lista:
  list

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // tworzymy zapytanie
    this.http.get('http://localhost:3000/projects')
      // subskrybujemy sie na wyniki - przychodzace dane przypisujemy do tablicy this.list
      .subscribe(list => this.list = list)
  }


}

