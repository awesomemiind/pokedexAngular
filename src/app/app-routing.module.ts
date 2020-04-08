import { InformationGuard } from './guards/information.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationComponent } from './views/information/information.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  {path: 'pokedex', component: ListComponent},
  {path: 'pokedex/view/:number', component: InformationComponent, canActivate: [InformationGuard]},
  {path: '**', redirectTo: '/pokedex', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
