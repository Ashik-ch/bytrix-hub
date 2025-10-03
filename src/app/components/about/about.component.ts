import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly explore new technologies and creative approaches to deliver cutting-edge solutions.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.'
    },
    {
      icon: 'fas fa-star',
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering results that exceed expectations.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'We love what we do and it shows in the quality and creativity of our work.'
    }
  ];

  team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Digital marketing expert with 10+ years of experience helping businesses grow online.',
      social: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning designer passionate about creating memorable brand experiences.',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        instagram: 'https://instagram.com/sarahchen'
      }
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in modern web technologies and mobile apps.',
      social: {
        linkedin: 'https://linkedin.com/in/mikerodriguez',
        github: 'https://github.com/mikerodriguez'
      }
    },
    {
      name: 'Emily Davis',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'SEO expert helping businesses improve their search rankings and online visibility.',
      social: {
        linkedin: 'https://linkedin.com/in/emilydavis',
        twitter: 'https://twitter.com/emilydavis'
      }
    }
  ];

  milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Started with a vision to help businesses succeed in the digital world.'
    },
    {
      year: '2022',
      title: 'First 10 Clients',
      description: 'Reached our first milestone of serving 10 satisfied clients.'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew our team to include specialists in all areas of digital marketing.'
    },
    {
      year: '2024',
      title: '50+ Projects',
      description: 'Successfully completed over 50 projects across various industries.'
    }
  ];
}
