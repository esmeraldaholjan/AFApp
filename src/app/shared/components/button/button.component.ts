import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: any;
  @Input() variant: string = "green";
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
