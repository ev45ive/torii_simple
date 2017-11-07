import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project-edit',
  template: `
    <p>
      project-edit works!
    </p>
  `,
  styles: []
})
export class ProjectEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
