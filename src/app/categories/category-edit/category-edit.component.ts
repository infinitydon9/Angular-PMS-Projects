import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
    // Default Parent Category is Top.
    defaultParent = "1";
    constructor() { }
    
    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }
}
