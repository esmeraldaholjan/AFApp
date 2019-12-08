import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { companies } from '../shared/constants';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  companies: Array<any>;
  emplyoeeInfoForm: FormGroup;

  constructor(protected formBuilder: FormBuilder, protected storageService: StorageService) { }

  ngOnInit() {
    this.initializeCreateEmployeeForm();
    this.companies = this.storageService.get('companies');
  }

  initializeCreateEmployeeForm(): void {
    this.emplyoeeInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['']
    }
    );
  }

  saveEmployee() {
    if(!this.emplyoeeInfoForm.controls.firstName.value || !this.emplyoeeInfoForm.controls.lastName.value) return;

    let employees = this.storageService.get('employees');
    const newEmplyoee = {
      id: this.generateId(employees),
      firstName: this.emplyoeeInfoForm.controls.firstName.value,
      lastName: this.emplyoeeInfoForm.controls.lastName.value,
      company: this.emplyoeeInfoForm.controls.company.value
    };
    employees.push(newEmplyoee)
    this.storageService.set('employees', employees);
  }

  generateId(employeesArray): number {
    return Math.max(...employeesArray.map(o => o.id), 0) + 1;
  }

}
