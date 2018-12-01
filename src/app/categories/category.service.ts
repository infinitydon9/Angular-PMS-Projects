import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    projects = [
        {
            id: 1,
            category: 1,
            name : 'Edwiser Form Builder',
            client: 'Wisdmlabs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            progress: 80,
            developers : [
                {
                    id: 1,
                    name: 'Sudam Chakor',
                    imageurl: ''
                }
            ]
        },
        {
            id: 2,
            category: 2,
            name : 'RemUI Customization - Child Theme & Local Plugin Development',
            client: 'Al Alamariah',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            progress: 50,
            developers : [
                {
                    id: 2,
                    name: 'Krunal Kamble',
                    imageurl: ''
                }
            ]
        },
        {
            id: 3,
            category: 1,
            name : 'Edwiser Form Builder',
            client: 'Wisdmlabs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            progress: 80,
            developers : [
                {
                    id: 1,
                    name: 'Sudam Chakor',
                    imageurl: ''
                }
            ]
        },
        {
            id: 4,
            category: 2,
            name : 'RemUI Customization - Child Theme & Local Plugin Development',
            client: 'Al Alamariah',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            progress: 50,
            developers : [
                {
                    id: 2,
                    name: 'Krunal Kamble',
                    imageurl: ''
                }
            ]
        },
        {
            id: 5,
            category: 1,
            name : 'Edwiser Form Builder',
            client: 'Wisdmlabs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            progress: 80,
            developers : [
                {
                    id: 1,
                    name: 'Sudam Chakor',
                    imageurl: ''
                }
            ]
        },
        {
            id: 6,
            category: 2,
            name : 'RemUI Customization - Child Theme & Local Plugin Development',
            client: 'Al Alamariah',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
            progress: 50,
            developers : [
                {
                    id: 2,
                    name: 'Krunal Kamble',
                    imageurl: ''
                }
            ]
        }
    ]
    constructor() { }

    getProjects(categoryId: number) {
        return this.projects.filter(
            (project) => project.category === categoryId
        );
    }
}
