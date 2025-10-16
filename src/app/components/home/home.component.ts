import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CountUpModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    {
      icon: 'fas fa-search',
      title: 'SEO & Google Ads',
      description: 'Boost your online visibility with our comprehensive SEO strategies and targeted Google Ads campaigns.',
      features: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'PPC Management']
    },
    {
      icon: 'fas fa-share-alt',
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social media platforms with engaging content.',
      features: ['Facebook Ads', 'Instagram Marketing', 'Personal Branding', 'Content Strategy']
    },
    {
      icon: 'fas fa-palette',
      title: 'Creative Services',
      description: 'Bring your ideas to life with our professional design and content creation services.',
      features: ['Graphic Design', 'Content Writing', 'Video Production', 'Brand Identity']
    },
    {
      icon: 'fas fa-code',
      title: 'Web & App Development',
      description: 'Create stunning websites and mobile applications that deliver exceptional user experiences.',
      features: ['Responsive Websites', 'Mobile Apps', 'E-commerce Solutions', 'Custom Development']
    },
    {
      icon: 'fas fa-store',
      title: 'Local Business Growth',
      description: 'Dominate local search results and attract more customers to your business.',
      features: ['Google My Business', 'Local SEO', 'Review Management', 'Local Advertising']
    }
  ];

  testimonials = [
    {
      name: 'Sarah',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Bytrix transformed our digital presence completely. Our website traffic increased by 300% in just 6 months!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'Local Restaurant',
      role: 'Owner',
      content: 'Their local SEO strategies brought us 50% more customers. Highly recommended for any local business!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Fashion Boutique',
      role: 'Marketing Director',
      content: 'The social media campaigns they created for us were absolutely amazing. Our engagement rates skyrocketed!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  stats = [
    { number: '70+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];
}
