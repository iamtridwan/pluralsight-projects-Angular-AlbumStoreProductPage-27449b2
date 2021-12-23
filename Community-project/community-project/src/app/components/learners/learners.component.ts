import { Component, OnInit } from '@angular/core';
import { Learner } from 'src/app/models/learner';
import { CoursesSevicesService } from 'src/app/core/courses-sevices.service';




@Component({
  selector: 'cp-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.scss'],
})
export class LearnersComponent implements OnInit {

  name = ''
  email = ''
  url = ''

userSetting: Learner = {
  name: this.name,
  email: this.email ,
  url: this.url
}
  constructor(private courseService: CoursesSevicesService) {}

  ngOnInit(): void {
  }


  onSubmit(){
   this.courseService.addLearner(this.userSetting)
   this.name = ''
   this.email = ''
   this.url = ''

  }
}
