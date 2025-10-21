import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { StatsComponent } from "../pages/stats/stats.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CountUpModule,
  ],
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
      features: ['Facebook Ads', 'Instagram Marketing', 'Content Strategy']
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Personal Brand Growth',
      description: 'Stand out online and position yourself as an industry authority.Build trust, visibility, and influence that open new opportunities.',
      features: ['Google Knowledge Panel Optimization', 'Personal SEO Strategy', 'Reputation & Review Management', ' Social Media Branding', 'Content & PR Growth']
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

  offer = [
    'Medical / Health Services',
    'Education / Coaching & Schools',
    'Legal Services / Law Firm',
    'Hospitality / Resorts',
    'Tourism / Adventure',
    'Food / Spices / Restaurant',
    'Insurance / Financial Services',
    'Luxury / Lifestyle / Brand',
    'Nutrition / Health Products',
    'Logistics & Trading / Conglomerate',
    'Technology / Digital Branding & Service'
  ];



}
