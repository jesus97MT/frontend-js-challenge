import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectSelectedTrend } from '../../store/selectors';
import { SlideOutComponent } from 'src/app/shared/slide-out/slide-out.component';

@Component({
  selector: 'app-trend-detail',
  templateUrl: './trend-detail.component.html',
  styleUrls: ['./trend-detail.component.scss'],
})
export class TrendDetailComponent {
  protected trend$ = this.store.select(selectSelectedTrend);
  public isEdit = false;

  @ViewChild('slideOut') slideOut!: SlideOutComponent;

  constructor(private store: Store) {}

  public onSlideOut(isEdit: boolean): void {
    this.isEdit = isEdit;
    this.slideOut.toggleSlideOut();
  }

  public onCancelEdit(): void {
    this.slideOut.toggleSlideOut();
  }
}
