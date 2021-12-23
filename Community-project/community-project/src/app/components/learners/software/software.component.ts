import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';

@Component({
  selector: 'cp-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss'],
})
export class SoftwareComponent implements OnInit {
  softList:any = [];
  software_url =
    '../assets/data/software.json';
  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
    this.courseService.getCourses(this.software_url)
    .subscribe(
      (data: Course[]) => this.softList = data,
      err => console.log(err)
    )
  }
}
