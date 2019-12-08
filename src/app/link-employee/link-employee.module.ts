import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkEmployeeComponent } from '../link-employee/link-employee.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'link-employee',
        component: LinkEmployeeComponent,
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes), SharedModule, TranslateModule.forRoot(), ReactiveFormsModule],
    exports: [RouterModule],
    declarations: [LinkEmployeeComponent]
})
export class LinkEmployeeModule { }
