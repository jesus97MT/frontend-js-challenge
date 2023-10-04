import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() onCancel = new EventEmitter();

  public trendForm = new FormGroup({
    id: new FormControl<string>(''),
    title: new FormControl<string>(''),
    body: new FormControl<string>(''),
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
      const trend = { ...this.trend, body: this.trend.body.join('') };
      this.trendForm.setValue(trend);
    }
  }

  public onSubmit(): void {
    // const newSuperhero = this.superHeroForm.value as SuperheroInterface;
    // if (this.data.new) {
    //   this.superherosService.addSuperhero(newSuperhero);
    // } else {
    //   this.superherosService.editSuperhero(newSuperhero, this.data.idToEdit);
    // }
    // this.dialogRef.close();
  }

  public cancel(): void {
    this.onCancel.emit();
  }
}
