import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/services/storage.service';
import { emplyoees, companies } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AFApp';

  constructor(
    protected translate: TranslateService,
    protected storageService: StorageService
  ) {
    const en = require('../../src/assets/localization/en-local.json');
    
    this.translate.setTranslation('en', en);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    //Setting seed of empyloyees and companies on init
    if(!this.storageService.get('employees') || !this.storageService.get('companies')) {
      this.storageService.set('employees', emplyoees);
      this.storageService.set('companies', companies);
    }
  }
}
