import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTransactionListComponent } from './fee-transaction-list.component';

describe('FeeTransactionListComponent', () => {
  let component: FeeTransactionListComponent;
  let fixture: ComponentFixture<FeeTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeeTransactionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
