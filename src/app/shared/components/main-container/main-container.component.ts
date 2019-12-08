import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  goToCreateEmployee() {
    this.router.navigate(['/create-employee']);
  }

  goToCreateCompany() {
    this.router.navigate(['/create-company']);
  }

  goToLinkEmployee() {
    this.router.navigate(['/link-employee']);
  }

}
