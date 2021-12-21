import { Component, OnInit } from '@angular/core';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';
import { Learner } from 'src/app/models/learner';


@Component({
  selector: 'cp-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
learners : Learner[] = []
  constructor(private courseService: CoursesSevicesService) { }

  ngOnInit(): void {
    this.courseService.getRegisteredLearners().subscribe(
      res => this.learners = res,
      err => console.log(err)
    )
  }

  

}
