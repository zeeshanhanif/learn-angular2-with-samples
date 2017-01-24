import { Routes } from '@angular/router';

import { 
    HomeComponent, 
    AboutComponent, 
    ContactComponent
} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact/:id', component: ContactComponent},
    {path:'contactus', redirectTo: 'contact'}
];