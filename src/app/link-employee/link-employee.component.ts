import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-link-employee',
  templateUrl: './link-employee.component.html',
  styleUrls: ['./link-employee.component.scss']
})
export class LinkEmployeeComponent implements OnInit {
  @ViewChild('toaster') toaster: any;
  
  companies: Array<any>;
  employees: Array<any>;
  unlinkedEmployees: Array<any>;
  linkEmployeeToCompanyForm: FormGroup;

  constructor(protected formBuilder: FormBuilder, protected storageService: StorageService) { }

  ngOnInit() {
    this.initializeLinkCompanyToEmployeeForm();
    this.companies = this.storageService.get('companies');
    this.employees = this.storageService.get('employees');
    this.unlinkedEmployees = this.employees.filter(e => e.company === "");
  }

  initializeLinkCompanyToEmployeeForm(): void {
    this.linkEmployeeToCompanyForm = this.formBuilder.group({
      company: ['']
    }
    );
  }

  linkEmployeeToCompany(employee) {
    if (!this.linkEmployeeToCompanyForm.controls.company.value) return;

    this.employees.find(e => e.id === employee.id)['company'] = this.linkEmployeeToCompanyForm.controls.company.value;
    this.storageService.set('employees', this.employees);

    this.toaster.show();

    this.ngOnInit();
  }

}
