import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestReviewListComponent } from './purchase-request-review-list.component';

describe('PurchaseRequestReviewListComponent', () => {
  let component: PurchaseRequestReviewListComponent;
  let fixture: ComponentFixture<PurchaseRequestReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
