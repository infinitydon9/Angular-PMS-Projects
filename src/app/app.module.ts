import { AppRoutingModule } from './app-routing.module';
import { NavigationService } from './navigation/navigation.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './shared/filter.pipe';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailComponent } from './categories/category-list/category-detail/category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    NavigationComponent,
    HeaderComponent,
    FilterPipe,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
