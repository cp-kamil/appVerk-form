import {
  Component,
  Input,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'form-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent  {
  @Input()
  public label!: string;
  @Input()
  public for!: string;
  @Input()
  public showValidation: boolean = false;

  public control!: NgControl;

  protected readonly requiredField = 'te pole jest wymagane'

  constructor() {}
}
