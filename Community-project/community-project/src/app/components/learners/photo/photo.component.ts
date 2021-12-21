import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'cp-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  photo: Course[] = [];
  photo_url =
    '/api-2.0/courses/?page=2&category=Photography%20&%20Video&price=price-paid';

  constructor() {}

  ngOnInit(): void {}
}
