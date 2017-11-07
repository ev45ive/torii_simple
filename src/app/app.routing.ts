import { RouterModule, Routes } from '@angular/router'
import { ProjectsListComponent } from "./projects-list.component";
import { ProjectCreateComponent } from "./project-create.component";
import { ProjectEditComponent } from "./project-edit.component";

const routes:Routes = [
    { path:'', component: ProjectsListComponent },
    { path:'project-create', component: ProjectCreateComponent },
    { path:'project-edit/:id', component: ProjectEditComponent },
]
export const Routing = RouterModule.forRoot(routes)