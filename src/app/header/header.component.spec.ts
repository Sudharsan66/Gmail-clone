import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from '../Core/Services/data-service.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HeaderComponent ],
      providers:[DataServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('expands the sidebar when clicked', () => {
    const val: any = true;
    component.expandClass.subscribe((data:any) => expect(data).toBe(val));
    component.expand();
  });
  it('should emit on click', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance; 
    spyOn(component.expandClass, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.search');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.expandClass.emit).arguments
 });
 
});
