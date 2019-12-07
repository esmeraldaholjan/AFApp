import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'create-employee',
        component: CreateEmployeeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule, TranslateModule.forRoot(), ReactiveFormsModule],
    exports: [RouterModule, CreateEmployeeComponent],
    declarations: [CreateEmployeeComponent],
    providers: []
})
export class CreateEmployeeModule { }
