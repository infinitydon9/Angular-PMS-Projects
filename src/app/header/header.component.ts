import { NavigationService } from './../navigation/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isnavOpen:boolean = false;
    constructor(private navigationService: NavigationService) { }
    
    ngOnInit() {
    }
    
    onNavOpen() {
        this.isnavOpen = !this.isnavOpen;
        this.navigationService.toggleNavigation(this.isnavOpen);
    }
}
