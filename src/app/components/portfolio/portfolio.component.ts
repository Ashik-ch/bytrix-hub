import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedCategory = 'all';
  
  categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'mobile-apps', name: 'Mobile Apps' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Digital Marketing' }
  ];

  projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web-development',
      client: 'Fashion Forward',
      description: 'A complete e-commerce solution with advanced features including inventory management, payment processing, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      results: {
        traffic: '+250%',
        conversions: '+180%',
        revenue: '+320%'
      },
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'mobile-apps',
      client: 'FitLife',
      description: 'A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      results: {
        downloads: '50K+',
        rating: '4.8/5',
        retention: '85%'
      },
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      id: 3,
      title: 'Restaurant Brand Identity',
      category: 'branding',
      client: 'Bella Vista',
      description: 'Complete brand identity design including logo, menu design, and marketing materials for an upscale restaurant.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      results: {
        recognition: '+150%',
        footfall: '+200%',
        social: '+300%'
      },
      technologies: ['Adobe Creative Suite', 'Brand Guidelines'],
      link: '#'
    },
    {
      id: 4,
      title: 'SEO Campaign',
      category: 'marketing',
      client: 'Tech Solutions Inc.',
      description: 'Comprehensive SEO strategy that improved search rankings and organic traffic for a B2B technology company.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      results: {
        rankings: '+45 positions',
        traffic: '+400%',
        leads: '+250%'
      },
      technologies: ['SEO Tools', 'Content Strategy', 'Link Building'],
      link: '#'
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'web-development',
      client: 'DataViz Pro',
      description: 'A powerful analytics dashboard for data visualization and business intelligence with real-time updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      results: {
        users: '10K+',
        efficiency: '+60%',
        satisfaction: '95%'
      },
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'marketing',
      client: 'Green Earth',
      description: 'Viral social media campaign promoting environmental awareness with engaging content and influencer partnerships.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      results: {
        reach: '2M+',
        engagement: '+500%',
        followers: '+150K'
      },
      technologies: ['Social Media', 'Content Creation', 'Influencer Marketing'],
      link: '#'
    }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
