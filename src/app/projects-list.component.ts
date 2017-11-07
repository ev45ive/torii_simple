import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-projects-list',
  template: `
    <p>
      projects-list works!
    </p>
    <table class="table">
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
      <tr *ngFor="let project of list">
        <td>{{ project.name }}</td>
        <td>
          <button [routerLink]="['project-edit',project.id]">Edit</button>
          <button (click)="remove(project.id)">&times;</button>
        </td>
      </tr>
    </table>

    <hr>
    <button routerLink="project-create">Utworz nowy</button>
  `,
  styles: [],
})

export class ProjectsListComponent implements OnInit {

  // tu bedzie nasza lista:
  list

  constructor(private http: HttpClient) { }

  remove(id){
    // kasujemy element 
    this.http.delete('http://localhost:3000/projects/'+id)
    // aktualizujemy liste aby element zniknal
    .subscribe(()=> this.fetchAll())
  }


  fetchAll(){
    // tworzymy zapytanie
    this.http.get('http://localhost:3000/projects')
      // subskrybujemy sie na wyniki - przychodzace dane przypisujemy do tablicy this.list
      .subscribe(list => this.list = list)
  }

  ngOnInit() {
    // na starcie pobieramy wszystko
    this.fetchAll()
  }
}

