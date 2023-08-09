import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMagicLinkComponent } from './request-magic-link.component';

describe('RequestMagicLinkComponent', () => {
  let component: RequestMagicLinkComponent;
  let fixture: ComponentFixture<RequestMagicLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestMagicLinkComponent]
    });
    fixture = TestBed.createComponent(RequestMagicLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
