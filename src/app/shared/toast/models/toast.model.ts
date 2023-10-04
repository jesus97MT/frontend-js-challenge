import { ToastPosition, ToastType } from '../enums/toast.enum';

export class ToastModel {
  public visible!: boolean;
  public title!: string;
  public message!: string;
  public position!: ToastPosition;
  public type!: ToastType;

  constructor(visible: boolean) {
    this.visible = visible;
    this.type = ToastType.Info;
    this.position = ToastPosition.TopRight;
  }
}
