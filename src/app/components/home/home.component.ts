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
      name: 'Rasha',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: `Honestly, Bytrix completely changed our online game. In just six months, our website traffic shot up by 300%. I'm seriously impressed with how much they improved our whole digital presence.`,
      rating: 5,
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHdGUIybC3GTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709126586790?e=2147483647&v=beta&t=70eN7o64dgDRvCNFS0E3px7PNUPB8xaZcAumihepGy8'
    },
    {
      name: 'Junaid P',
      company: 'Local Restaurant',
      role: 'Owner',
      content: `We started working with Bytrix on local SEO, and it made a huge difference. We're getting 50% more customers now.If you're a local business, you need to use them—highly recommend!`,
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdz5kFucdw2l7srdlElM15_DZlbH6DaE2G9Q&s'
    },
    {
      name: 'Soumya',
      company: 'Fashion Boutique',
      role: 'Marketing Director',
      content: `The social media campaigns Bytrix created were fantastic! They really understood our brand. Our engagement rates are through the top now—it was an amazing return on investment.`,
      rating: 5,
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQFSNOAzmQpesA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1620468840744?e=2147483647&v=beta&t=2JeSlyoWhsUSXngmoYOjsjKAuSrGYDBUu7pIrUftfHA'
    }
  ];

  stats = [
    { number: '70+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];
}
