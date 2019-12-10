import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWebcameraComponent } from './ng-webcamera.component';

describe('NgWebcameraComponent', () => {
  let component: NgWebcameraComponent;
  let fixture: ComponentFixture<NgWebcameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWebcameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWebcameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
