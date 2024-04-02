import { Component, HostListener, Renderer2, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { AllCoursesService } from './utils/service/all-courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	constructor(private allCoursesService: AllCoursesService) {}

	ngOnInit(): void {
		// const filePath = 'assets/text-files/1.js';
		// this.allCoursesService.readLocalTextFile(filePath)
		//   .then(text => {
		// 	const data = JSON.parse(text);
		// 	console.log('Parsed JSON:', data);
		// 	console.log('Type of parsed data:', typeof data);
		// 	// Do something with the parsed JSON data
		//   })
		//   .catch(error => {
		// 	// Handle error appropriately
		//   });
	  }
	  
 
}
