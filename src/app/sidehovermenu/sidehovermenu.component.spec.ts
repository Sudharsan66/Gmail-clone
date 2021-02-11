import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidehovermenuComponent } from './sidehovermenu.component';

describe('SidehovermenuComponent', () => {
  let component: SidehovermenuComponent;
  let fixture: ComponentFixture<SidehovermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidehovermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidehovermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
