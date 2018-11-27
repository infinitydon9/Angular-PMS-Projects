import { Subject } from 'rxjs';

export class NavigationService {
    navigationChanged = new Subject<boolean>();

    toggleNavigation(navStatus: boolean) {
        this.navigationChanged.next(navStatus);
    }
}