import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SettingsComponent } from './settings/settings.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { ValidatingFormComponent } from './validating-form/validating-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BehaviorsubjectparentComponent } from './behaviorsubjectparent/behaviorsubjectparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
    {path:'s',component:SignupComponent},
    {path:'signin',component:SigninComponent},
    {path:'validate', component:ValidatingFormComponent},
    {path:'dashboard',children:[
        {path:'', component:DashboardComponent},
        {path:'settings',component:SettingsComponent}
    ],canActivate:[studentguardGuard]},
    {path:'reactform', component:ReactiveFormComponent},
    {path:'behavior', component:BehaviorsubjectparentComponent},
    {path:'pipe', component:PipeComponent},
    {path:'', component:EventparentComponent}
];
