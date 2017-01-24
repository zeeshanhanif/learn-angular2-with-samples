import { Routes } from '@angular/router';
import {LoggedInGuard} from './providers/loggedin-guard'

import { 
    HomeComponent, 
    AboutComponent, 
    ContactComponent,
    ProtectedComponent
} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/custom',pathMatch:'full'},
    {path:'custom', component: HomeComponent},
    {path:'facebook', component: AboutComponent},
    {path:'contact/:id', component: ContactComponent},
    {path:'contactus', redirectTo: 'contact'},
    {path:'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]},
];