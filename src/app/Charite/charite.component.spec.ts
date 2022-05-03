import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariteComponent } from './charite.component';

describe('ChariteComponent', () => {
  let component: ChariteComponent;
  let fixture: ComponentFixture<ChariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
