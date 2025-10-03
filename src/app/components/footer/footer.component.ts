import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/bytrix' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/bytrix' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/bytrix' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/bytrix' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/bytrix' }
  ];

  quickLinks = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' }
  ];

  services = [
    { name: 'SEO & Google Ads', route: '/services' },
    { name: 'Social Media Marketing', route: '/services' },
    { name: 'Creative Services', route: '/services' },
    { name: 'Web & App Development', route: '/services' },
    { name: 'Local Business Growth', route: '/services' }
  ];
}
