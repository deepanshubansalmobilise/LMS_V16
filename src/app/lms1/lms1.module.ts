import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lms1RoutingModule } from './lms1-routing.module';
import { Lms1Component } from './lms1.component';
import { CoursesComponent } from './courses/courses.component';
import { Shared1Module } from '../shared1/shared1.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OneCourseComponent } from './courses/one-course/one-course.component';
import { CoursesHomeComponent } from './courses/courses-home/courses-home.component';
import { ResourcesComponent } from './resources/resources.component';



@NgModule({
  declarations: [Lms1Component, CoursesComponent, DashboardComponent, OneCourseComponent, CoursesHomeComponent, ResourcesComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    Shared1Module,
    CommonModule,
    Lms1RoutingModule
  ]
})
export class Lms1Module { }
