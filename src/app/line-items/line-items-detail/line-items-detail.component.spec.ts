import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemsDetailComponent } from './line-items-detail.component';

describe('LineItemsDetailComponent', () => {
  let component: LineItemsDetailComponent;
  let fixture: ComponentFixture<LineItemsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
