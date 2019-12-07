import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { InputComponent } from './components/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot()
  ],
  declarations: [HeaderComponent, FooterComponent, MainContainerComponent, InputComponent, DropdownComponent, ButtonComponent],
  exports: [HeaderComponent, FooterComponent, MainContainerComponent, InputComponent, DropdownComponent, ButtonComponent],
  providers: [StorageService]
})
export class SharedModule { }
