import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemsCreateComponent } from './line-items-create.component';

describe('LineItemsCreateComponent', () => {
  let component: LineItemsCreateComponent;
  let fixture: ComponentFixture<LineItemsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
