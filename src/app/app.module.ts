import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateEmployeeModule } from './create-employee/create-employee.module';
import { CreateCompanyModule } from './create-company/create-company.module';
import { LinkEmployeeModule } from './link-employee/link-employee.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/create-employee',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/create-employee',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CreateEmployeeModule,
    CreateCompanyModule,
    LinkEmployeeModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

