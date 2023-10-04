import { Component, OnInit, ViewChild } from '@angular/core';
import { TrendFacadeService } from '../../services/trend.facade.service';
import { SlideOutComponent } from 'src/app/shared/slide-out/slide-out.component';

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends-list.component.html',
  styleUrls: ['./trends-list.component.scss'],
})
export class TrendsListComponent implements OnInit {
  protected trends$ = this.trendFacadeService.trends$;
  public isEdit = false;

  @ViewChild('slideOut') slideOut!: SlideOutComponent;

  constructor(private trendFacadeService: TrendFacadeService) {}

  ngOnInit(): void {
    this.trendFacadeService.loadTrends();
  }

  public onSlideOut(isEdit: boolean): void {
    this.isEdit = isEdit;
    this.slideOut.toggleSlideOut();
  }
  public onCancelEdit(): void {
    this.slideOut.toggleSlideOut();
  }
}
