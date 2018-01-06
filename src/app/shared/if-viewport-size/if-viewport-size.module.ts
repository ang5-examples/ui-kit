import {NgModule} from '@angular/core';
import {IfViewportSizeDirective} from './if-viewport-size.directive';
import {IfViewportSizeService} from './if-viewport-size.service';

@NgModule({
  declarations: [
    IfViewportSizeDirective
  ],
  imports: [
  ],
  providers: [
    IfViewportSizeService
  ],
  exports: [
    IfViewportSizeDirective
  ]
})
export class IfViewportSizeModule { }
