import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
    projects = [];
    filteredProjects:string = '';

    constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }
    
    ngOnInit() {
        this.route.params.subscribe(
            (category: Params) => {
                this.projects = this.categoryService.getProjects(+category.id);
            }
        );
    }
}
