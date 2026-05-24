import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from '../../services/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  private dashboardService = inject(Dashboard);

  totalSales = signal(0);
  todaySales = signal(0);
  totalOrders = signal(0);
  totalProducts = signal(0);

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (res: any) => {
        this.totalSales.set(res.totalSales);
        this.todaySales.set(res.todaySales);
        this.totalOrders.set(res.totalOrders);
        this.totalProducts.set(res.totalProducts);
      },
      error: (err) => {
        console.log('Dashboard error:', err);
      }
    });
  }

}