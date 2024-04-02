import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewUserCourseService } from '../../../utils/service/new-user-course.service';
import { CoursesService } from '../../../utils/service/courses.service';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.scss']
})
export class OneCourseComponent {
  
  newCoursesInfo: any = [];
  courseInfo: any;
  modifiedCoursesInfo: any = {}
  progressCourseInfo: any = {}
  selectedChapter: string = '';

  courseId!: any;

  constructor(private route: ActivatedRoute,  private newCourseService : NewUserCourseService, 
    private courseService : CoursesService) { }

  ngOnInit(): void {
    this.newCoursesInfo = this.newCourseService.getnewUserCourseInfo()
    console.log(this.newCoursesInfo, "deepanshu")
    
    setTimeout(() => {
      console.log(this.newCoursesInfo, "dee")
      this.handleCourseInfo()
    }, 500);
    this.route.paramMap.subscribe(params => {
      // retrieve the dynamic ID from route parameters
      this.courseId = params.get('id');
      console.log('Dynamic ID:', this.courseId);
    });
  }

  showCourseChapter(chapterNumber: number, topicNumber: number, topicTitle: string) {
    this.selectedChapter = `${chapterNumber}.${topicNumber}: ${topicTitle}`;
}

  handleCourseInfo() {
    // find the course object with the matching courseId
    const courseInfo = this.newCoursesInfo.find((item: any) => item.id === this.courseId);
    
    this.progressCourseInfo = courseInfo
    this.courseService.getCourses().subscribe((data)=>{
      console.log(data, 'deepu')
      const info = data.find(item => item.id === this.courseId)
      console.log(info, 'deepu1234')
      this.modifiedCoursesInfo = {...info, ...this.progressCourseInfo}
      console.log(this.modifiedCoursesInfo, 'deepu000')
    })
  }
  
}
