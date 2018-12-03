import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
    isnavOpen: boolean = false;
    navSubscription: Subscription;

    constructor(private router: Router, private navigationService: NavigationService) { }
    
    ngOnInit() {
        this.navigationService.navigationChanged.subscribe(
            (navStatus: boolean) => this.isnavOpen = navStatus
        );
    }
    
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
}
