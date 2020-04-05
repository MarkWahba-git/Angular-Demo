import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [CourseDetailsComponent, CourseItemComponent, CoursesListComponent, ServicesComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
