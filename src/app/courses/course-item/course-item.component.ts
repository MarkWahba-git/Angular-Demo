import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  
  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.courseClick.emit(this.course.title);
  }
}
