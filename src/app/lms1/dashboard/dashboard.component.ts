import { Component, OnInit } from '@angular/core';
import { NewUserCourseService } from '../../utils/service/new-user-course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  newCoursesInfo: any = [];

  constructor( private newCourseService : NewUserCourseService) { }

  ngOnInit(): void {
    this.newCoursesInfo = this.newCourseService.getnewUserCourseInfo()
    console.log(this.newCoursesInfo, "newCourseInfo")
  }
}
