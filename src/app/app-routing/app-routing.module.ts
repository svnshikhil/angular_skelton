import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { SignupComponent } from '../components/signup/signup.component';
import { FullComponent } from '../containers/full/full.component';
import { LoginGuardGuard } from "../guard/login-guard.guard";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'dashboard',
        component: FullComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'home', component: HomeComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
