import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPubliciteComponent } from './add-publicite.component';

describe('AddPubliciteComponent', () => {
  let component: AddPubliciteComponent;
  let fixture: ComponentFixture<AddPubliciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPubliciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
