import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHolderComponent } from './icon-holder.component';

describe('IconHolderComponent', () => {
  let component: IconHolderComponent;
  let fixture: ComponentFixture<IconHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
