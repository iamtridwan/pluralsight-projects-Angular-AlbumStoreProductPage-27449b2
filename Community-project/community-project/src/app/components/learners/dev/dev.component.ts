import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'cp-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  devList: Course[] = [];
  dev_url = 'api-2.0/courses/?page=2&category=Development&price=price-paid';

  constructor() {}

  ngOnInit(): void {}
}
