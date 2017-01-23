import { Routes } from '@angular/router';

import { 
    HomeComponent, 
    AboutComponent, 
    ContactComponent, 
    ProtectedComponent,
    FormModuleComponent,
    ReactiveFormsModuleComponent,
    ReactiveFormsModule2Component,
    ReactiveFormsTwowayComponent

} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact/:id', component: ContactComponent},
    {path:'contactus', redirectTo: 'contact'},
    {path:'protected', component: ProtectedComponent},
    {path:'formmodule', component: FormModuleComponent},
    {path:'reactiveforms', component: ReactiveFormsModuleComponent},
    {path:'reactiveforms2', component: ReactiveFormsModule2Component},
    {path:'reactivetwoway', component: ReactiveFormsTwowayComponent},    
];