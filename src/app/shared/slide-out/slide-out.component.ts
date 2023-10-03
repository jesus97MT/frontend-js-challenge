import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.scss'],
})
export class SlideOutComponent {
  public isActive: boolean = false;

  toggleSlideOut() {
    this.isActive = !this.isActive;
  }
}
