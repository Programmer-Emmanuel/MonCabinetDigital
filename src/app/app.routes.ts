import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        loadComponent : ()=> import('./layout/home/home').then((m)=> m.Home)
    },
    {
        path: 'identity',
        loadComponent : ()=>import('./layout/identity/identity').then((m)=> m.Identity)
    },
        {
        path: '**',
        redirectTo: ''
    }
];
