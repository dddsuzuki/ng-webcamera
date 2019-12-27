import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraIconComponent } from './camera-icon.component';

describe('CameraIconComponent', () => {
  let component: CameraIconComponent;
  let fixture: ComponentFixture<CameraIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
