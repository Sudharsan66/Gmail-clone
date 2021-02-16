import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from '../Core/Services/data-service.service';

import { EmailWrapperComponent } from './email-wrapper.component';

describe('EmailWrapperComponent', () => {
  let component: EmailWrapperComponent;
  let fixture: ComponentFixture<EmailWrapperComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ EmailWrapperComponent ],
      providers:[DataServiceService]
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
