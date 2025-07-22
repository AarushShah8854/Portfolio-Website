import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Work } from './components/work/work';
import { Servicesprovided } from './components/servicesprovided/servicesprovided';
import { Blog } from './components/blog/blog';
import { About } from './components/about/about';
import { GetInTouch } from './components/get-in-touch/get-in-touch';

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
        path:'work',
        component: Work
    },
    {
        path:'services-provided',
        component: Servicesprovided
    },
    {
        path:'blog',
        component: Blog
    },
    {
        path:'about',
        component: About
    },
    {
        path:'get-in-touch',
        component: GetInTouch
    }

];
