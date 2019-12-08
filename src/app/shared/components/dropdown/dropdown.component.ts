import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input() id: string;
  @Input() label: string;
  @Input() items: Array<any> = [];
  @Output() onDropdownItemChoosen: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(event): void {
    let value = event.target.value;
    this.propagateChange(value);
    this.onDropdownItemChoosen.emit(value);
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
