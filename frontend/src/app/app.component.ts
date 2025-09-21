import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
   title = 'student-admission-system';

  ngOnInit() {
    document.documentElement.classList.add('light-theme'); // Ensure default theme class is set
  }
}
