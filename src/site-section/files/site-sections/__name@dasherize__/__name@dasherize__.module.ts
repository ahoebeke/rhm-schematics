import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {<%= classify(name) %>LandingComponent} from './<%= dasherize(name) %>-landing/<%= dasherize(name) %>-landing.component';
import {TranslateModule} from '@ngx-translate/core';
import {<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
import {<%= classify(name) %>RoutingModule} from './<%= dasherize(name) %>-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    <%= classify(name) %>RoutingModule
  ],
  declarations: [
    <%= classify(name) %>LandingComponent,
    <%= classify(name) %>Component
  ],
  exports: [
    <%= classify(name) %>LandingComponent,
    <%= classify(name) %>Component,
    TranslateModule
  ]
})
export class <%= classify(name) %>Module {
}
