import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
    providedIn: 'root'
})
export class ProjectserverService {
    constructor(private http: Http) {}

    getProjects() {
        return this.http.get('https://project-management-tool-12890.firebaseio.com/projects.json').pipe(
            map (
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            ), catchError(
                (error: Response) => throwError('Something went wrong')
            )
        );
    }
}
