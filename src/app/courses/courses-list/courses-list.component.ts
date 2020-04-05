import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses;
  clickedCourseTitle;
  constructor(private _coursesService: CoursesService) {
    console.log(_coursesService);
  }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
  }

  onCourseClick(ev) {
    console.log(ev);
    this.clickedCourseTitle = ev;
  }
  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  }
}
