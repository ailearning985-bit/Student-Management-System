import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTransactionFormComponent } from './fee-transaction-form.component';

describe('FeeTransactionFormComponent', () => {
  let component: FeeTransactionFormComponent;
  let fixture: ComponentFixture<FeeTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeeTransactionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
