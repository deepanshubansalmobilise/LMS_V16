import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home

// Error

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '', component: HomePage, data: { title: 'Home'} },
  
	// { path: '**', component: ErrorPage }
  {
    path: 'lms1',
    loadChildren: () =>
      import('./lms1/lms1.module').then((m) => m.Lms1Module), 
  },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
