import { Component } from '@angular/core';
import { Color,ScaleType  } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  admissionData = [
    { name: 'Computer Science', value: 120 },
    { name: 'Commerce', value: 80 },
    { name: 'Arts', value: 45 }
  ];

  feeCollectionData = [
    { name: 'January', value: 250000 },
    { name: 'February', value: 180000 },
    { name: 'March', value: 300000 }
  ];

  view: [number, number] = [600, 300];
 colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350']
  };
}
