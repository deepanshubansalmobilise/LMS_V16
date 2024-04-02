import { Component } from '@angular/core';
import { NewUserCourseService } from '../../utils/service/new-user-course.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {

  selectedOption: string = 'all'; // Default option

  constructor(private newCourseService : NewUserCourseService) {}

  showTable(option: string): void {
    this.selectedOption = option;
  }

}
