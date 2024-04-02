import { Injectable, OnInit } from '@angular/core';
import { UserCoursesService } from './user-courses.service';
import { CoursesService } from './courses.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserCourseService {
  courses: any[] = [];
  userCourses: any[] = [];
  showCourses: any[] = [];
  userID = 1;
  newCoursesInfo = [];

  constructor(private UserCourseService: UserCoursesService, 
    private CourseService : CoursesService,
    private resourcesService : ResourcesService) {
      this.getCourses();
     }

     getnewUserCourseInfo(){
      return this.newCoursesInfo;
     }
     
  getCourses(): void {
    this.CourseService.getCourses().subscribe((courses)=>{
        this.courses = courses;
        this.getuserCourses();
        // courses data is stored in this....
        console.log(this.courses, "1courses access");
      });
  }

  getuserCourses(): void {
    this.UserCourseService.getCourses().subscribe((courses)=>{
        this.userCourses = courses;
        console.log(this.userCourses, 'userCourses access');
        this.getuserCoursesInfo();
      });
  }

  getuserCoursesInfo() {

    this.courses.forEach(course => {
      let courseId = course.id.toString();
      let purchased = false;
      let progress = 0;
      
      // check if the course is purchased
      this.userCourses.forEach(userCourse => {
        if(userCourse.userID == this.userID){
          if (userCourse.coursesInfo[courseId]) {
            purchased = true;
            progress = this.calculateProgress(userCourse.coursesInfo[courseId]);
          }
        }
      });
    
    // push course information to newCoursesInfo array
    // this.newCoursesInfo.push({
    //   title: course.title,
    //   id: course.id,
    //   imageSrc: course.imageSrc,
    //   progress: progress,
    //   totalChapters: course.totalChapters,
    //   totalTopics: course.chapters.reduce((total, chapter) => total + chapter.topics.length, 0),
    //   totalAssignments: course.totalAssignments,
    //   purchased: purchased,
    //   chapters: course.chapters.map(chapter => ({
    //     id: chapter.id,
    //     topics: chapter.topics.map(topic => ({
    //       id: topic.id,
    //       title: topic.title,
    //       description: topic.description,
    //       url: topic.url,
    //       mediatype: topic.mediatype,
    //       mediaTime: topic['media-time'], 
    //       assignments: topic.assignments
    //     }))
    //   }))
    // });
  });

    // sort newCoursesInfo array with purchased courses appearing first
    this.newCoursesInfo.sort((a, b) => {
      // if (a.purchased && !b.purchased) return -1;
      // if (!a.purchased && b.purchased) return 1;
      return 0;
    });

    console.log(this.newCoursesInfo, "newCourseInfo access");
}


  calculateProgress(course: any) {
    let totalTopics = 0;
    let completedTopics = 0;
  
    // iterate over each chapter
    for (const chapterKey in course) {
      if(chapterKey != "name"){
        for(const topicKey in course[chapterKey]){
          if(topicKey != "name"){
            totalTopics++
            if(course[chapterKey][topicKey].completed){
              completedTopics++
            }
            }
        }
      }
    }
    // console.log(completedTopics, course, totalTopics)
  
    // calculate progress percentage
    const progress = totalTopics === 0 ? 0 : (completedTopics / totalTopics) * 100;
    return progress;
  }
}


