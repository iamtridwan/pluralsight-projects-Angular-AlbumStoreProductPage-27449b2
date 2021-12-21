import { Component, OnInit } from '@angular/core';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'cp-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  businessList: Course[] = [];
  business_url =
    'https://www.udemy.com/api-2.0/courses/?page=2&page_size=12&price=price-paid';
  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
    this.courseService.getCourses(this.business_url).subscribe(
      (res) => (this.businessList = res),
      (err) => console.log(err)
    );
  }
}
