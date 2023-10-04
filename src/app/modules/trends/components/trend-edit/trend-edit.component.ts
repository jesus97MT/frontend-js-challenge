import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trend, TrendFormGroup } from '../../interfaces/trend.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { TrendProvider } from '../../types/trend-provider.type';
import { TrendFacadeService } from '../../services/trend.facade.service';

@Component({
  selector: 'app-trend-edit',
  templateUrl: './trend-edit.component.html',
  styleUrls: ['./trend-edit.component.scss'],
})
export class TrendEditComponent implements OnInit {
  @Input() isEdit: boolean = false;

  @Input() trend: Trend | null = null;

  @Output() onCancel = new EventEmitter();

  public trendForm = new FormGroup({
    title: new FormControl<string>(''),
    body: new FormControl<string>(''),
    provider: new FormControl<TrendProvider>('elmundo'),
    image: new FormControl<string>(''),
    url: new FormControl<string>(''),
  });

  constructor(private trendFacadeService: TrendFacadeService) {}

  ngOnInit() {
    console.log(this.isEdit);
    console.log(this.trend);
    if (this.isEdit && this.trend) {
      const trend: TrendFormGroup = {
        title: this.trend?.title,
        body: this.trend?.body?.join(''),
        provider: this.trend?.provider,
        image: this.trend?.image,
        url: this.trend?.url,
      };
      this.trendForm.setValue(trend);
    }
  }

  public onSubmit(): void {
    const trend = this.trendForm.value as TrendFormGroup;
    if (this.isEdit) {
      const id = this.trend?.id as Trend['id'];
      this.trendFacadeService.editTrend(trend, id);
    } else {
      this.trendFacadeService.createTrend(trend);
    }
    //console.log(this.trendForm.value);
  }

  public cancel(): void {
    this.onCancel.emit();
  }
}
