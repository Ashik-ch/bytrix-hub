import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  selectedCategory = 'all';
  
  categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'seo', name: 'SEO' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'tips', name: 'Tips & Tricks' }
  ];

  articles = [
    {
      id: 1,
      title: '10 Essential SEO Strategies for 2024',
      excerpt: 'Discover the latest SEO techniques that will help your website rank higher in search results and drive more organic traffic.',
      content: 'In this comprehensive guide, we explore the most effective SEO strategies for 2024, including technical SEO, content optimization, and link building techniques...',
      category: 'seo',
      author: 'Emily Davis',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      featured: true,
      tags: ['SEO', 'Search Rankings', 'Organic Traffic']
    },
    {
      id: 2,
      title: 'The Complete Guide to Social Media Marketing',
      excerpt: 'Learn how to create engaging social media campaigns that build brand awareness and drive conversions across all platforms.',
      content: 'Social media marketing has evolved significantly over the years. In this guide, we cover everything from content strategy to paid advertising...',
      category: 'social-media',
      author: 'Sarah Chen',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Social Media', 'Content Strategy', 'Engagement']
    },
    {
      id: 3,
      title: 'Building Responsive Websites: Best Practices',
      excerpt: 'Master the art of creating websites that look and work perfectly on all devices with our comprehensive guide to responsive design.',
      content: 'Responsive web design is no longer optional. With mobile traffic surpassing desktop, your website must provide an excellent experience across all devices...',
      category: 'web-development',
      author: 'Mike Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Web Development', 'Responsive Design', 'Mobile-First']
    },
    {
      id: 4,
      title: 'Google Ads Optimization: 5 Proven Strategies',
      excerpt: 'Maximize your Google Ads ROI with these proven optimization techniques that will improve your campaign performance and reduce costs.',
      content: 'Google Ads can be a powerful tool for driving traffic and conversions, but only if optimized correctly. Here are 5 strategies that work...',
      category: 'marketing',
      author: 'Alex Johnson',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Google Ads', 'PPC', 'ROI Optimization']
    },
    {
      id: 5,
      title: 'Content Marketing: How to Create Engaging Content',
      excerpt: 'Learn the secrets of creating content that resonates with your audience and drives meaningful engagement and conversions.',
      content: 'Content is king, but not all content is created equal. Discover how to create content that truly engages your audience and drives results...',
      category: 'tips',
      author: 'Emily Davis',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Content Marketing', 'Engagement', 'Strategy']
    },
    {
      id: 6,
      title: 'Local SEO: Dominate Your Local Market',
      excerpt: 'Master local SEO strategies to help your business appear in local search results and attract more customers from your area.',
      content: 'Local SEO is crucial for businesses that serve specific geographic areas. Here\'s how to optimize your online presence for local search...',
      category: 'seo',
      author: 'Alex Johnson',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Local SEO', 'Google My Business', 'Local Search']
    }
  ];

  get filteredArticles() {
    if (this.selectedCategory === 'all') {
      return this.articles;
    }
    return this.articles.filter(article => article.category === this.selectedCategory);
  }

  get featuredArticles() {
    return this.articles.filter(article => article.featured);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
