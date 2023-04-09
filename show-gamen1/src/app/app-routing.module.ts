import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gamen1Component } from './gamen1/gamen1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'gamen1', component: Gamen1Component },
    { path: '', redirectTo: '/gamen1', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
