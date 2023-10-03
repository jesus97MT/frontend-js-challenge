import { Component, Input, OnInit } from '@angular/core';
import { ButtonShape, ButtonSize, ButtonType } from 'src/app/types/button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType = 'none';
  @Input() size: ButtonSize = 'medium';
  @Input() shape: ButtonShape = 'normal';
  @Input() color: string = '';
  @Input() img: string = '';

  constructor() {}

  ngOnInit() {}
}
