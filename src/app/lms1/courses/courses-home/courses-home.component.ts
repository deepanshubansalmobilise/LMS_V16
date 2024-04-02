import { Component, OnInit } from '@angular/core';
import { NewUserCourseService } from '../../../utils/service/new-user-course.service';
import { NavigationEnd, NavigationError, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.scss']
})
export class CoursesHomeComponent implements OnInit {

  newCoursesInfo: any = [];
  searchQuery: string = '';
  filteredCourses: any[] = [];

  constructor( private newCourseService : NewUserCourseService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url);
      } else if (event instanceof NavigationError) {
        console.error('Navigation Error:', event);
      }
    });
    this.newCoursesInfo = this.newCourseService.getnewUserCourseInfo();
    this.filteredCourses = this.newCoursesInfo;
  }

  handleClick(id: string) {
    // navigate to the route with the dynamic ID parameter
    this.router.navigate(['/lms1/course', id]);
    console.log(id)
  }
 

  searchCourses() {
    if (this.searchQuery.trim() === '') {
      // if search query is empty, show all courses
      this.filteredCourses = this.newCoursesInfo;
    } else {
      // filter courses based on search query
      this.filteredCourses = this.newCoursesInfo.filter((course: any) =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
