import { Component, OnInit } from '@angular/core';
import { TrendFacadeService } from '../../services/trend.facade.service';

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends-list.component.html',
  styleUrls: ['./trends-list.component.scss'],
})
export class TrendsListComponent implements OnInit {
  protected trends$ = this.trendFacadeService.trends$;
  public isEdit = false;

  constructor(private trendFacadeService: TrendFacadeService) {}

  ngOnInit(): void {
    this.trendFacadeService.loadTrends();
  }
}
