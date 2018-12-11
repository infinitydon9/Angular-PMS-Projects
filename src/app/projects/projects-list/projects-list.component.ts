import { ProjectserverService } from './../projectserver.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
    projects: any[];
    constructor(private projectServerService: ProjectserverService) { }
    
    ngOnInit() {
        this.projectServerService.getProjects().subscribe(
            (projects) => console.log(projects)
        );
    }
    
}
