import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {<%= classify(name) %>LandingComponent} from './<%= dasherize(name) %>-landing/<%= dasherize(name) %>-landing.component';

const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>LandingComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule {
}
