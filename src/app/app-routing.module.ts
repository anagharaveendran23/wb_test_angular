import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { FormComponent } from './form/form.component';

const routes: Routes =  [
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'listing', component: ListingComponent},
{path: 'form', component: FormComponent},
//{path: '',redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
