import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './create-company.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'create-company',
        component: CreateCompanyComponent,
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes), SharedModule, TranslateModule.forRoot(), ReactiveFormsModule],
    exports: [RouterModule],
    declarations: [CreateCompanyComponent]
})
export class CreateCompanyModule { }
