import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TraceDashboardComponent } from "./trace-dashboard/trace-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TraceDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'microtrace-ui';
}
