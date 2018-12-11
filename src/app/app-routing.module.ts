import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CategoryListComponent } from './categories/category-list/category-list.component';

const appRoutes: Routes = [
    { path: 'projects', component: ProjectsComponent, children: [
            { path: '', redirectTo: '/projects/all', pathMatch: 'full' },
            { path: 'all', component: ProjectsListComponent}
        ] 
    },
    { path: 'categories', component: CategoriesComponent, children: [
            { path: '', redirectTo: '/categories/1', pathMatch: 'full'},
            { path: 'new', component: CategoryEditComponent },
            { path: ':id', component: CategoryListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule {}