import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    categories = [
        {   
            id: 1,
            image: 'M',
            name: 'Miscellaneous',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            projects: 6
        },
        {   
            id: 2,
            image: 'L',
            name: 'LearnDash Development',
            description: '',
            projects: 5
        }
    ];
    constructor() { }
    
    ngOnInit() {
    }
    
}
