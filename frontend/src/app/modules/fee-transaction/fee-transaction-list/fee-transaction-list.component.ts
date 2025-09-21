import { Component, OnInit } from '@angular/core';
import { FeeTransactionService } from '../fee-transaction.service';

@Component({
  selector: 'app-fee-transaction-list',
  standalone: false,
  templateUrl: './fee-transaction-list.component.html',
  styleUrl: './fee-transaction-list.component.scss'
})
export class FeeTransactionListComponent implements OnInit {
  transactions: any[] = [];

  constructor(private transactionService: FeeTransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionService.getAll().subscribe(data => {
      this.transactions = data;
    });
  }

  deleteTransaction(id: number) {
    if (confirm('Are you sure to delete this transaction?')) {
      this.transactionService.delete(id).subscribe(() => this.loadTransactions());
    }
  }
}
