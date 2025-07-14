import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutMe } from './components/about-me/about-me';
import { Projects } from './components/projects/projects';
import { ContactForms } from './components/contact-forms/contact-forms';
import { Admin } from './components/admin/admin';

export const routes: Routes = [

    {
        path: '',
        redirectTo: "home",
        pathMatch:'full'
    },
    {
        path:'home',
        component: Home
    },
    {
        path:'about-me',
        component: AboutMe
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'contact-form',
        component: ContactForms
    },
    {
        path: 'admin',
        component: Admin
    }

];
