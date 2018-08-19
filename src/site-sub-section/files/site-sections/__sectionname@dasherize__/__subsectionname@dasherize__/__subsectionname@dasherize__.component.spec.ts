import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(subsectionname) %>Component } from './<%= dasherize(subsectionname) %>.component';

describe('<%= classify(subsectionname) %>Component', () => {
  let component: <%= classify(subsectionname) %>Component;
  let fixture: ComponentFixture<<%= classify(subsectionname) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(subsectionname) %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(subsectionname) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
