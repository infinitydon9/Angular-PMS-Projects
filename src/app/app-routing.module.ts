import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'categories', component: CategoriesComponent, children: [
            { path: '', redirectTo: '/categories/1', pathMatch: 'full'},
            { path: ':id', component: CategoryDetailComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule {}