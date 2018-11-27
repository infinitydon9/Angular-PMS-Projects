import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
    isnavOpen: boolean = false;
    navSubscription: Subscription;
    selectedIndex: number = null;
    filteredCategories:string = '';

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

    constructor(private navigationService: NavigationService) { }
    
    ngOnInit() {
        this.navigationService.navigationChanged.subscribe(
            (navStatus: boolean) => this.isnavOpen = navStatus
        );
    }
    
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
}
