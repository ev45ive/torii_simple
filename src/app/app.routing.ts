import { RouterModule, Routes } from '@angular/router'
import { ProjectsListComponent } from "./projects-list.component";
import { ProjectCreateComponent } from "./project-create.component";

const routes:Routes = [
    { path:'', component: ProjectsListComponent },
    { path:'project-create', component: ProjectCreateComponent },
]
export const Routing = RouterModule.forRoot(routes)