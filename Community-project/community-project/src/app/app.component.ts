import { Component } from '@angular/core';

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'community-project';

  height = false;
date = new Date().getFullYear()
  setNavHeight() {
    this.height = !this.height;
  }
}
