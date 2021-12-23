import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';

@Component({
  selector: 'cp-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  photo: any = [];
  photo_url = '../assets/data/photo.json';

  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
    this.courseService.getCourses(this.photo_url).subscribe(
      (data: Course[]) => (this.photo = data),
      (err) => console.log(err)
    );
  }
}
