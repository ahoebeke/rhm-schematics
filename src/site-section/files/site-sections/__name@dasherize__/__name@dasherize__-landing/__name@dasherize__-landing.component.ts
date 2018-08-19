import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-<%= dasherize(name) %>-landing',
  templateUrl: './<%= dasherize(name) %>-landing.component.html',
  styleUrls: ['./<%= dasherize(name) %>-landing.component.scss']
})
export class <%= classify(name) %>LandingComponent implements OnInit {

  // Properties

  // ...

  // Methods

  constructor(
    private route: ActivatedRoute,
  ) {
    console.log('<%= classify(name) %>LandingComponent: TODO');
  }

  ngOnInit() {
  }

}
