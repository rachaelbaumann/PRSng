import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestReviewDetailComponent } from './purchase-request-review-detail.component';

describe('PurchaseRequestReviewDetailComponent', () => {
  let component: PurchaseRequestReviewDetailComponent;
  let fixture: ComponentFixture<PurchaseRequestReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
