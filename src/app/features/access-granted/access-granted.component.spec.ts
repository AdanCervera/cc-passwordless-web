import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGrantedComponent } from './access-granted.component';

describe('AccessGrantedComponent', () => {
  let component: AccessGrantedComponent;
  let fixture: ComponentFixture<AccessGrantedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessGrantedComponent]
    });
    fixture = TestBed.createComponent(AccessGrantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
