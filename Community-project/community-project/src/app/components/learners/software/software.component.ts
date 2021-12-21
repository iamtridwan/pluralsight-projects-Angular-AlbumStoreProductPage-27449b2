import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'cp-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss'],
})
export class SoftwareComponent implements OnInit {
  softList: Course[] = [];
  software_url =
    'api-2.0/courses/?page=2&category=IT%20&%20Software&price=price-paid';
  constructor() {}

  ngOnInit(): void {}
}
