import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() id: string;
  @Input() label: string;
  @Input() type: any;

  constructor() { }

  ngOnInit() {
  }

  onInput(event): void {
    let value = event.target.value;
    this.propagateChange(value);
  }

  writeValue(input): void {
    this.propagateChange(input);
  }

  registerOnTouched() {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => { };

}
