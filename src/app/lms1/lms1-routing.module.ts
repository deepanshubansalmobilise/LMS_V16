import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lms1Component } from './lms1.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OneCourseComponent } from './courses/one-course/one-course.component';
import { CoursesHomeComponent } from './courses/courses-home/courses-home.component';
import { ResourcesComponent } from './resources/resources.component';
// import * as path from 'path';

const routes: Routes = [
  {
    path: '',
    component: Lms1Component,
    children: [
      {
        path: 'course',
        component: CoursesComponent,
        children: [
          {
            path: 'home',
            component: CoursesHomeComponent
          },
          {
            path: ':id', 
            component: OneCourseComponent
          },
         {
          path: '**',
          redirectTo: 'home'
         }
        ]
      }, 
      {
        path: 'resources',
        component: ResourcesComponent
      },      
    {
      path: '',
      component: DashboardComponent
    }
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lms1RoutingModule { }
