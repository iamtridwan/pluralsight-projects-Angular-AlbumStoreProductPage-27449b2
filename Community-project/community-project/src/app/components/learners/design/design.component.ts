import { Component, OnInit } from '@angular/core';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'cp-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  designList: any = [];
  design_url = '../assets/data/design.json'
  
  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
    this.courseService.getCourses(this.design_url)
    .subscribe(
      (res: Course[]) => this.designList = res,
      err => console.log(err) 
    );
  }
}
