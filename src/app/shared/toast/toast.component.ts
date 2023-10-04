import { ToastModel } from './models/toast.model';
import { Component, OnDestroy } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnDestroy {
  public toastModel!: ToastModel;

  private subscriptions$;

  constructor(private toastService: ToastService) {
    this.subscriptions$ = this.toastService.toastState$.subscribe(
      (toastModel: ToastModel) => {
        this.toastModel = toastModel;
      }
    );
  }

  public close(): void {
    this.toastModel.visible = false;
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe;
  }
}
