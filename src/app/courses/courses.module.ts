import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseDetailsComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule],
  providers: [CoursesService],
  exports: [CoursesComponent],
})
export class CoursesModule {}
