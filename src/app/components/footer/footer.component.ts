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
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/bytrixhub', color: '#1877F2' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/bytrixhub', color: '#E4405F' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/bytrixhub', color: '#0A66C2' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/97439956727', color: '#25D366' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@bytrixhub', color: '#FF0000' }
  ];


  quickLinks = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' },
    { name: 'Admin Hub', route: '/tasks' }
  ];

  services = [
    { name: 'SEO & Google Ads', route: '/services' },
    { name: 'Social Media Marketing', route: '/services' },
    { name: 'Creative Services', route: '/services' },
    { name: 'Web & App Development', route: '/services' },
    { name: 'Local Business Growth', route: '/services' }
  ];
}
