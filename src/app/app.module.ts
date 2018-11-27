import { AppRoutingModule } from './app-routing.module';
import { NavigationService } from './navigation/navigation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
