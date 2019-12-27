import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  myCourses = [ 
  {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"Angular","courseSummary":"Abc"},
  {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"Node","courseSummary":"Abc"},    {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"VueJs","courseSummary":"Abc"},
  {"imageUrl":"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png","courseName":"MangoDB","courseSummary":"Abc"}
  ];

  constructor(private router: Router) { }

  onSelect(course){
    this.router.navigate(['/course',course.courseName]);
  }

  ngOnInit() {
  }

}