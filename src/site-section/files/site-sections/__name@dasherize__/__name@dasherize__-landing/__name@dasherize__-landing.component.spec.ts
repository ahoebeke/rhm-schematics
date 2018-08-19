import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>LandingComponent } from './<%= dasherize(name) %>-landing.component';

describe('<%= classify(name) %>LandingComponent', () => {
  let component: <%= classify(name) %>LandingComponent;
  let fixture: ComponentFixture<<%= classify(name) %>LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(name) %>LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
