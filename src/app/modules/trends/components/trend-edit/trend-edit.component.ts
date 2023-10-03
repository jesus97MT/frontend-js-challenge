import { Component, OnInit, Input } from '@angular/core';
import { Trend } from '../../interfaces/trend.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { TrendProvider } from '../../types/trend-provider.type';

@Component({
  selector: 'app-trend-edit',
  templateUrl: './trend-edit.component.html',
  styleUrls: ['./trend-edit.component.scss'],
})
export class TrendEditComponent implements OnInit {
  @Input() isEdit: boolean = false;

  @Input() trend: Trend | null = null;

  public trendForm = new FormGroup({
    id: new FormControl<string>(''),
    title: new FormControl<string>(''),
    body: new FormControl<string[]>(['']),
    provider: new FormControl<TrendProvider>('elmundo'),
    image: new FormControl<string>(''),
    url: new FormControl<string>(''),
    createdAt: new FormControl<Date>(new Date()),
  });

  constructor() {}

  ngOnInit() {
    console.log(this.isEdit);
    console.log(this.trend);
    if (this.isEdit && this.trend) {
      this.trendForm.setValue(this.trend);
    }
  }
}
