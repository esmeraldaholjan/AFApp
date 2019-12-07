import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AFApp';

  constructor(
    protected translate: TranslateService
  ) {
    const en = require('../../src/assets/localization/en-local.json');
    
    this.translate.setTranslation('en', en);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
