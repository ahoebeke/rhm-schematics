import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-<%= dasherize(subsectionname) %>',
  templateUrl: './<%= dasherize(subsectionname) %>.component.html',
  styleUrls: ['./<%= dasherize(subsectionname) %>.component.scss']
})
export class <%= classify(subsectionname) %>Component implements OnInit {

  // Properties

  // ...

  // Methods

  constructor(
    private route: ActivatedRoute,
  ) {
    console.log('<%= classify(subsectionname) %>Component: TODO');
  }

  ngOnInit() {
  }

}
