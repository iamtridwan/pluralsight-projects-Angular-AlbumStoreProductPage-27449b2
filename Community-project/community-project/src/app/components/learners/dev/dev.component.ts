import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';

@Component({
  selector: 'cp-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  devList: any = [];
  dev_url = '../assets/data/dev.json';

  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
    this.courseService.getCourses(this.dev_url)
    .subscribe(
      (res: Course[]) => this.devList = res
    )
  }
}
