import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  @Input() message: string;
  @Input() type: any;

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, 1000);
  }
}
