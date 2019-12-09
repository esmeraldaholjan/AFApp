import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  @ViewChild('toasterSuccess') toasterSuccess: any;
  @ViewChild('toasterRemove') toasterRemove: any;
  
  companies: Array<any>;
  companyInfoForm: FormGroup;
  emplyoeesInChoosenCompany: Array<any>;
  shouldShowCompanyDetails: boolean = false;
  showNoEmployees: boolean = false;
  employees: Array<any>;
  company: any;

  constructor(protected formBuilder: FormBuilder, protected storageService: StorageService) { }

  ngOnInit() {
    this.initializeCreateCompanyForm();
    this.companies = this.storageService.get('companies');
  }

  initializeCreateCompanyForm(): void {
    this.companyInfoForm = this.formBuilder.group({
      companyName: ['', Validators.required],
    }
    );
  }

  saveCompany() {
    if (!this.companyInfoForm.controls.companyName.value || this.companies.find(x => x.name === this.companyInfoForm.controls.companyName.value)) return;

    this.companies = this.storageService.get('companies');
    const newCompany = {
      id: this.generateId(this.companies),
      name: this.companyInfoForm.controls.companyName.value
    };

    this.companies.push(newCompany)
    this.storageService.set('companies', this.companies);

    this.toasterSuccess.show();
  }

  seeComapnyDetails(company) {
    this.company = company;
    this.employees = this.storageService.get('employees');
    this.emplyoeesInChoosenCompany = this.employees.filter(e => e.company === company);

    if (this.emplyoeesInChoosenCompany.length !== 0) {
      this.shouldShowCompanyDetails = true;
      this.showNoEmployees = false;
    } else {
      this.showNoEmployees = true;
      this.shouldShowCompanyDetails = false;
    }
  }

  removeEmployee(employee) {
    this.employees.find(e => e.id === employee.id)['company'] = "";
    this.storageService.set('employees', this.employees);

    this.toasterRemove.show();

    this.seeComapnyDetails(this.company);
  }

  generateId(companiesArray): number {
    return Math.max(...companiesArray.map(c => c.id), 0) + 1;
  }

}
