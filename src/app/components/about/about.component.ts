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
      name: 'Anshid KA',
      role: 'Business Strategist & Co-Founder', // Handles business strategy, client relations, marketing, SEO
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvFPqZjPsXJacDm1xViKkRmaF7iXe22HVdQ&s',
      bio: 'Digital marketing expert with 10+ years of experience helping businesses grow online.',
      social: {
        linkedin: 'https://linkedin.com/in/anshidka',
        twitter: 'https://twitter.com/anshidka'
      }
    },
    {
      name: 'Ashik CH',
      role: 'Tech Lead & Co-Founder', // Handles technical development, web & app design
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGrQ5zodG5v-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699258218399?e=2147483647&v=beta&t=ZJAWLsGQXvW6MEvkHLPuNoFGyG0d2dMc0NMSaJQ8MLE',
      bio: 'Designer passionate about creating memorable brand experiences through web and app development.',
      social: {
        linkedin: 'https://linkedin.com/in/ashikch',
        instagram: 'https://instagram.com/_ashik_ch'
      }
    },
    {
      name: 'Navas Jan',
      role: 'Content Head & Co-Founder', // Chief of content creation, social media, copywriting
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifSvnfGb-wqjD8o2-gSnnbxkOfo0VcfX49A&s',
      bio: 'Content strategist and storyteller crafting compelling narratives for brands.',
      social: {
        linkedin: 'https://linkedin.com/in/navasjan',
        github: 'https://github.com/navas_jan'
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
