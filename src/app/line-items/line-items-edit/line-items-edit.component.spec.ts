import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemsEditComponent } from './line-items-edit.component';

describe('LineItemsEditComponent', () => {
  let component: LineItemsEditComponent;
  let fixture: ComponentFixture<LineItemsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
