import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkEmployeeComponent } from '../link-employee/link-employee.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: 'link-employee',
        component: LinkEmployeeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule, TranslateModule.forRoot()],
    exports: [RouterModule],
    declarations: [LinkEmployeeComponent]
})
export class LinkEmployeeModule { }
