import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeTransactionService } from '../fee-transaction.service';

@Component({
  selector: 'app-fee-transaction-form',
  standalone: false,
  templateUrl: './fee-transaction-form.component.html',
  styleUrl: './fee-transaction-form.component.scss'
})
export class FeeTransactionFormComponent implements OnInit {
  transactionForm!: FormGroup;
  id: number | null = null;

  constructor(private fb: FormBuilder, private transactionService: FeeTransactionService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      admissionId: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['Cash', Validators.required],
      remarks: ['']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) this.loadTransaction();
  }

  loadTransaction() {
    this.transactionService.getById(this.id!).subscribe(tx => {
      this.transactionForm.patchValue(tx);
    });
  }

  save() {
    if (this.transactionForm.invalid) return;
    if (this.id) {
      this.transactionService.update(this.id, this.transactionForm.value).subscribe(() => this.router.navigate(['/transactions']));
    } else {
      this.transactionService.add(this.transactionForm.value).subscribe(() => this.router.navigate(['/transactions']));
    }
  }
}
