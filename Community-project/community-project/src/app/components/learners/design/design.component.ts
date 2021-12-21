import { Component, OnInit } from '@angular/core';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'cp-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  designList: Course[] = [];
  design_url = '/api-2.0/courses/?page=2&category=Design&price=price-paid';
  
  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
    this.courseService.getCourses(this.design_url);
  }
}
