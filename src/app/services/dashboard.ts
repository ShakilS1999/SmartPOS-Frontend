import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Dashboard {

  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7247/api/Dashboard';

  getDashboardData() {
    return this.http.get<any>(this.apiUrl);
  }

}