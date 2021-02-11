import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailWrapperComponent } from './email-wrapper.component';

describe('EmailWrapperComponent', () => {
  let component: EmailWrapperComponent;
  let fixture: ComponentFixture<EmailWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
