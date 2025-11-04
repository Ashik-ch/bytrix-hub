import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      id: 'seo-google-ads',
      icon: 'fas fa-search',
      title: 'SEO, Meta Ads, Google Ads',
      subtitle: 'Boost Your Online Visibility',
      description: 'Comprehensive search engine optimization and pay-per-click advertising to increase your online presence and drive qualified traffic to your website.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      features: [
        {
          title: 'On-page SEO',
          description: 'Optimize your website content, meta tags, and structure for better search rankings.',
          icon: 'fas fa-file-alt'
        },
        {
          title: 'Technical SEO',
          description: 'Improve site speed, mobile-friendliness, and crawlability.',
          icon: 'fas fa-cogs'
        },
        {
          title: 'PPC Management',
          description: 'Create and manage effective Google Ads campaigns for maximum ROI.',
          icon: 'fas fa-chart-line'
        }
      ],
      pricing: {
        starting: '',
        period: 'month'
      }
    },
    {
      id: 'social-media',
      icon: 'fas fa-share-alt',
      title: 'Social Media Marketing',
      subtitle: 'Build Your Brand Presence',
      description: 'Create engaging social media strategies that build brand awareness, drive engagement, and convert followers into customers.',
      image: 'assets/images/marketing.jpg',
      features: [
        {
          title: 'Facebook Ads',
          description: 'Targeted advertising campaigns to reach your ideal audience on Facebook.',
          icon: 'fab fa-facebook-f'
        },
        {
          title: 'Instagram Marketing',
          description: 'Visual storytelling and influencer partnerships to grow your Instagram presence.',
          icon: 'fab fa-instagram'
        },
        {
          title: 'Personal Branding',
          description: 'Build a strong personal brand that resonates with your target audience.',
          icon: 'fas fa-user-tie'
        },
        {
          title: 'Content Strategy',
          description: 'Develop engaging content that drives engagement and conversions.',
          icon: 'fas fa-pen-fancy'
        }
      ],
      pricing: {
        starting: '',
        period: 'month'
      }
    },
    {
      id: 'creative-services',
      icon: 'fas fa-palette',
      title: 'Creative Services',
      subtitle: 'Bring Your Ideas to Life',
      description: 'Professional design and content creation services that make your brand stand out and connect with your audience.',
      image: 'assets/images/creative.jpg',
      features: [
        {
          title: 'Graphic Design',
          description: 'Logo design, branding, and visual identity that represents your business.',
          icon: 'fas fa-paint-brush'
        },
        {
          title: 'Content Writing',
          description: 'Compelling copy that converts visitors into customers.',
          icon: 'fas fa-pen'
        },
        {
          title: 'Video Production',
          description: 'Professional video content for marketing and social media.',
          icon: 'fas fa-video'
        },
        {
          title: 'Brand Identity',
          description: 'Complete brand guidelines and visual identity system.',
          icon: 'fas fa-id-card'
        }
      ],
      pricing: {
        starting: '',
        period: 'project'
      }
    },
    {
      id: 'web-app-development',
      icon: 'fas fa-code',
      title: 'Web & App Development',
      subtitle: 'Digital Solutions That Work',
      description: 'Custom websites and mobile applications built with modern technologies and best practices for optimal performance.',
      image: 'assets/images/creative-web.jpg',
      features: [
        {
          title: 'Responsive Websites',
          description: 'Mobile-first websites that work perfectly on all devices.',
          icon: 'fas fa-mobile-alt'
        },
        {
          title: 'Mobile Apps',
          description: 'Native and cross-platform mobile applications for iOS and Android.',
          icon: 'fas fa-mobile'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Online stores with secure payment processing and inventory management.',
          icon: 'fas fa-shopping-cart'
        },
        {
          title: 'Custom Development',
          description: 'Tailored solutions built specifically for your business needs.',
          icon: 'fas fa-tools'
        }
      ],
      pricing: {
        starting: '',
        period: 'project'
      }
    },
    {
      id: 'local-business-growth',
      icon: 'fas fa-store',
      title: 'Local Business Growth',
      subtitle: 'Dominate Local Search',
      description: 'Specialized strategies to help local businesses attract more customers and compete effectively in their market.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      features: [
        {
          title: 'Google My Business',
          description: 'Optimize your GMB listing to appear in local search results.',
          icon: 'fab fa-google'
        },
        {
          title: 'Local SEO',
          description: 'Improve your visibility in local search results and maps.',
          icon: 'fas fa-map-marker-alt'
        },
        {
          title: 'Review Management',
          description: 'Build and manage positive online reviews for your business.',
          icon: 'fas fa-star'
        },
        {
          title: 'Local Advertising',
          description: 'Targeted advertising to reach customers in your area.',
          icon: 'fas fa-bullhorn'
        }
      ],
      pricing: {
        starting: '',
        period: 'month'
      }
    },
    {
      id: 'personal-branding',
      icon: 'fas fa-user-astronaut',
      title: 'Personal Branding',
      subtitle: 'Build a Magnetic Digital Identity',
      description:
        'Empower your online presence and position yourself as an industry authority. We craft tailored strategies that boost your credibility, visibility, and influence across search engines and social media.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      features: [
        {
          title: 'Google Knowledge Panel Setup',
          description: 'Get verified presence on Google search with a custom Knowledge Panel for your name or brand.',
          icon: 'fab fa-google'
        },
        {
          title: 'Personal SEO Strategy',
          description: 'Rank your personal name or brand higher in Google search results using optimized content and backlinks.',
          icon: 'fas fa-search-dollar'
        },
        {
          title: 'Reputation & Review Management',
          description: 'Monitor and enhance your online reputation across Google, news, and social platforms.',
          icon: 'fas fa-star-half-alt'
        },
        {
          title: 'Social Media Branding',
          description: 'Build a strong personal identity across LinkedIn, Instagram, and other major platforms.',
          icon: 'fab fa-linkedin'
        },
        {
          title: 'Content & PR Growth',
          description: 'Boost visibility through feature articles, interviews, and strategic content collaborations.',
          icon: 'fas fa-bullhorn'
        }
      ],
      pricing: {
        starting: '',
        period: 'month'
      }
    }

  ];

  selectedService = this.services[0];

  selectService(service: any) {
    this.selectedService = service;
  }

  steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We learn about your business, goals, and challenges to create the perfect strategy.'
    },
    {
      number: 2,
      title: 'Strategy',
      description: 'We develop a comprehensive plan tailored to your specific needs and objectives.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'Our team executes the strategy with precision and attention to detail.'
    },
    {
      number: 4,
      title: 'Optimization',
      description: 'We continuously monitor and optimize for better results and ROI.'
    }
  ];

}
