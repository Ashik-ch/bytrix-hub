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
      title: '10 Essential Digital Marketing Strategies for 2024',
      excerpt: 'Stay ahead in the digital world with the most effective marketing techniques to grow your brand, engage your audience, and boost conversions.',
      content: 'In this comprehensive guide, we explore the most effective SEO strategies for 2024, including technical SEO, content optimization, and link building techniques...',
      category: 'seo',
      author: 'Anshid KA',
      authorImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrPgCSO6f5ij2lCq9jVlwzySCRSLjAiMdWA&s',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      featured: true,
      tags: ['Digital Marketing', 'Brand Growth', 'Audience Engagement']
    },

    {
      id: 3,
      title: 'Building Responsive Websites: Best Practices',
      excerpt: 'Master the art of creating websites that look and work perfectly on all devices with our comprehensive guide to responsive design.',
      content: 'Responsive web design is no longer optional. With mobile traffic surpassing desktop, your website must provide an excellent experience across all devices...',
      category: 'web-development',
      author: 'Ashik CH',
      authorImage: 'https://media.licdn.com/dms/image/v2/D5603AQGrQ5zodG5v-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699258218399?e=2147483647&v=beta&t=ZJAWLsGQXvW6MEvkHLPuNoFGyG0d2dMc0NMSaJQ8MLE',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Web Development', 'Responsive Design', 'Mobile-First']
    },
    {
      id: 5,
      title: 'Content Marketing: How to Create Engaging Content',
      excerpt: 'Learn the secrets of creating content that resonates with your audience and drives meaningful engagement and conversions.',
      content: 'Content is king, but not all content is created equal. Discover how to create content that truly engages your audience and drives results...',
      category: 'tips',
      author: 'Navas Jan',
      authorImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67b2DtPRWw3lPBVzNlC_fZ9NukJ4Cs3lbsw&s',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop',
      featured: false,
      tags: ['Content Marketing', 'Engagement', 'Strategy']
    },
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
