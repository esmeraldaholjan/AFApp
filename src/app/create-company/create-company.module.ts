import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './create-company.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: 'create-company',
        component: CreateCompanyComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule, TranslateModule.forRoot()],
    exports: [RouterModule],
    declarations: [CreateCompanyComponent]
})
export class CreateCompanyModule { }
