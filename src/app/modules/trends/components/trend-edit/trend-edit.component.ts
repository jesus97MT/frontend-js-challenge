import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trend, TrendFormGroup } from '../../interfaces/trend.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { TrendProvider } from '../../types/trend-provider.type';
import { TrendFacadeService } from '../../services/trend.facade.service';
import { TrendProviders } from '../../models/trend-providers.model';

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

  public TrendProviders = TrendProviders;

  constructor(private trendFacadeService: TrendFacadeService) {}

  ngOnInit() {
    if (this.isEdit && this.trend) {
      const trend: TrendFormGroup = {
        title: this.trend?.title,
        body: this.trend?.body?.join('\n \n'),
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
    this.cancel();
  }

  public cancel(): void {
    this.onCancel.emit();
  }
}
