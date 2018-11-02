import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemsListComponent } from './line-items-list.component';

describe('LineItemsListComponent', () => {
  let component: LineItemsListComponent;
  let fixture: ComponentFixture<LineItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
