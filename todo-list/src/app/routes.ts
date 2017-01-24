import { Routes } from '@angular/router';

import { 
    HomeComponent, 
    AboutComponent, 
    ContactComponent, 
    TodoListComponent,
} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/todolist',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact/:id', component: ContactComponent},
    {path:'contactus', redirectTo: 'contact'},
    {path:'todolist', component: TodoListComponent},
    
];