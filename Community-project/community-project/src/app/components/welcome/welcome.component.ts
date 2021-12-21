import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  backgroundImage: string[] = [
    '../../../assets/pexels-tranmautritam-326503.jpg',
    '../../../assets/pexels-pixabay-4158.jpg',
    '../../../assets/school-template-hero-img-bg.jpg',
  ];
  count = 0;
  bgContent = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.bgContent = this.backgroundImage[this.count];
  }
  // switching background image
  setBg(action: string) {
    if (action === 'next') {
      this.count = this.testCount(this.count);
      this.bgContent = this.backgroundImage[this.count];
      this.count++;
    } else if (action === 'prev') {
      this.count = this.testCount(this.count);
      this.bgContent = this.backgroundImage[this.count];
      this.count--;
    }
  }

  // setting number for image to be displayed
  testCount(val: number): number {
    let result;
    if (val > this.backgroundImage.length - 1) {
      result = 0;
    } else if (val < 0) {
      result = this.backgroundImage.length - 1;
    } else {
      result = val;
    }
    return result;
  }

  // navigation
  moveToLearners() {
    this.router.navigate(['/learner']);
  }
  moveToSponsors() {
    this.router.navigate(['/sponsor']);
  }
}
