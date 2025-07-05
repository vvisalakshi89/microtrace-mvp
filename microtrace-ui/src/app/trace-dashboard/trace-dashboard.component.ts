import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trace-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './trace-dashboard.component.html',
  styleUrls: ['./trace-dashboard.component.css']
})
export class TraceDashboardComponent implements OnInit {
  traces: any[] = [];
  loading = true;
  filterText: string = '';

  constructor(private http: HttpClient) {}

  get filteredTraces() {
    return this.traces.filter(trace =>
      trace.operationName.toLowerCase().includes(this.filterText.toLowerCase()) ||
      trace.serviceName.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  
  ngOnInit(): void {
    // Replace this with your actual backend/API endpoint
    this.http.get<any[]>('http://localhost:3001/api/traces').subscribe({
      next: (data) => {
        this.traces = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading traces:', err);
        this.loading = false;
      }
    });
/*
    const url = 'http://localhost:16686/api/traces?service=service-b';

    this.http.get<any>(url).subscribe({
      next: (response) => {
        this.traces = response.data.map((trace: any) => ({
          traceId: trace.traceID,
          serviceName: trace.processes[Object.keys(trace.processes)[0]].serviceName,
          operationName: trace.spans[0]?.operationName,
          startTime: new Date(Number(trace.spans[0]?.startTime / 1000)),
          duration: trace.spans[0]?.duration / 1000 // convert to ms
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching traces:', err);
        this.loading = false;
      }
    });*/
  
  }
}
