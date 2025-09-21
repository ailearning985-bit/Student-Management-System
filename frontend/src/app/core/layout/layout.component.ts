import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  isSidebarOpen = true;
  isDarkMode = false;
  isMobile = false;

   constructor(private router: Router) {}

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.add(this.isDarkMode ? 'dark-theme' : 'light-theme');
    this.checkScreenSize();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(this.isDarkMode ? 'dark-theme' : 'light-theme');
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  logout() {
    // TODO: Replace with real logout
    console.log('Logging out...');
    this.router.navigate(['/users/login']);
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.isSidebarOpen = !this.isMobile;
  }
}
