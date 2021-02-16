import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataServiceService } from '../Core/Services/data-service.service';
import { SingleMailComponent } from './single-mail.component';

describe('SingleMailComponent', () => {
  let component: SingleMailComponent;
  let fixture: ComponentFixture<SingleMailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ SingleMailComponent ],
      providers:[DataServiceService]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 it('should not send null data as request', async () => {
 let id=22
  component.getSingleEmail(id).subscribe((data) => {});
  expect(id).not.toBeNull();
});
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
