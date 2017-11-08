import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'task-details',
  template: `
    <p>
      task-details works!
    </p>
    {{task.name}}
  `,
  styles: []
})
export class TaskDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  task = {}

  // Pobieramy szczegoly Project
  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3000/tasks/'+ id)
    .subscribe( task => {
      this.task = task
    })
  }

}
