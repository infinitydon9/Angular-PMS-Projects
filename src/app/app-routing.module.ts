import { CategoriesComponent } from './categories/categories.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'categories', component: CategoriesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule {}