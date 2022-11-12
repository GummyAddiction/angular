import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { HomeComponent } from './home/home.component';
import { DeveloperFormComponent } from './developer-form/developer-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/developer', pathMatch: 'full' },
  { path: 'detail/:id', component: DeveloperDetailComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'form/:id', component: DeveloperFormComponent },
  { path: 'form', component: DeveloperFormComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
