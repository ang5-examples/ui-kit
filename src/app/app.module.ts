import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TabsModule} from './shared/tabs/tabs.module';

import {IfViewportSizeModule} from './shared/if-viewport-size/if-viewport-size.module';
import {TestComponentComponent} from './test-component/test-component.component';
import {IConfig, IfViewportSizeConfig} from './shared/if-viewport-size/if-viewport-size.service';

const config: IConfig = { // IfViewportSizeConfig
  medium: 600,
  large: 900
};

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule, TabsModule, IfViewportSizeModule
  ],
  providers: [
    { provide: IfViewportSizeConfig, useValue: new IfViewportSizeConfig(config) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
