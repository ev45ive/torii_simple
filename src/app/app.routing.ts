import { RouterModule, Routes } from '@angular/router'
import { ProjectsListComponent } from "./projects-list.component";
import { ProjectCreateComponent } from "./project-create.component";
import { ProjectEditComponent } from "./project-edit.component";
import { ProjectDetailsComponent } from "./project-details.component";
import { TaskDetailsComponent } from "./task-details.component";

    const routes:Routes = [
        { path:'', component: ProjectsListComponent },
        { path:'project-create', component: ProjectCreateComponent },
        { path:'project-edit/:id', component: ProjectEditComponent },
        { path:'project-details/:id', component: ProjectDetailsComponent },
        { path:'task-details/:id', component: TaskDetailsComponent },
    ]
    export const Routing = RouterModule.forRoot(routes)