import { NavigationService } from './navigation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
    isnavOpen = false;
    navSubscription: Subscription;
    constructor(private navigationService: NavigationService) { }
    
    ngOnInit() {
        this.navSubscription = this.navigationService.navigationChanged.subscribe(
            (navStatus: boolean) => this.isnavOpen = navStatus
        );
    }

    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
}
