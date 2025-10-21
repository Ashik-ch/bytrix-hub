import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { StatsComponent } from "../pages/stats/stats.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, CountUpModule,],
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
      title: 'Mythili Manthra Skin & Hair Clinic',
      category: 'digital-marketing',
      client: 'Dr. Saigeetha CM – Bangalore',
      description:
        'We handled their complete digital marketing setup — from Meta and Google Ads to brand identity and GMB optimization, boosting visibility and patient reach.',
      project: 'Meta Ads, Google Ads, Logo, Poster Design, GMB, Social Media',
      image: 'https://images.unsplash.com/photo-1588776814546-ec7ed8c1bffa?w=600&h=400&fit=crop',
      results: {
        visibility: '+250%',
        engagement: '+180%',
        inquiries: '+300%',
      },
      technologies: ['Meta Ads', 'Google Ads', 'Brand Design', 'SEO'],
      link: '#',
    },
    {
      id: 2,
      title: 'G Tec Kalpetta',
      category: 'social-media',
      client: 'Mr. Divyaanand',
      description:
        'We managed and optimized G Tec Kalpetta’s social media presence and ad campaigns, resulting in significant engagement growth.',
      project: 'Social Media Handling, Meta & Google Ads, GMB',
      image: 'https://images.unsplash.com/photo-1611162616305-4c88f0eb7a1d?w=600&h=400&fit=crop',
      results: {
        reach: '+200%',
        followers: '+120%',
        engagement: '+160%',
      },
      technologies: ['Meta Ads', 'Google Ads', 'Social Strategy'],
      link: '#',
    },
    {
      id: 3,
      title: 'Health Gloss Legal Service',
      category: 'web-development',
      client: 'Ms. Renuka – USA',
      description:
        'Created a professional website with SEO optimization and GMB integration to strengthen their digital footprint across the U.S. market.',
      project: 'Website, SEO, GMB',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      results: {
        visibility: '+300%',
        authority: '+200%',
        traffic: '+350%',
      },
      technologies: ['WordPress', 'SEO', 'GMB'],
      link: '#',
    },
    {
      id: 4,
      title: 'Vythiri Greens & DJ Medavos Resorts',
      category: 'web-development',
      client: 'Mr. Lijin – Calicut',
      description:
        'Developed and optimized multiple resort websites, applying advanced SEO and digital ad strategies to attract travelers effectively.',
      project: 'Website, GMB, Ads, SEO',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop',
      results: {
        bookings: '+220%',
        visibility: '+250%',
        reviews: '+190%',
      },
      technologies: ['Angular', 'SEO', 'Google Ads'],
      link: '#',
    },
    {
      id: 5,
      title: 'Bright Eduway & Exter Qatar',
      category: 'education',
      client: 'Mr. Kamal – Qatar',
      description:
        'Delivered end-to-end digital marketing services — including SEO, content creation, and performance ads — for multiple education brands in Qatar.',
      project: 'Website, SEO, Content, Meta & Google Ads, Poster & Video',
      image: 'https://images.unsplash.com/photo-1581093588401-22c97e53f9a0?w=600&h=400&fit=crop',
      results: {
        leads: '+400%',
        ranking: '+35 positions',
        awareness: '+270%',
      },
      technologies: ['Google Ads', 'Meta Ads', 'SEO', 'Video Editing'],
      link: '#',
    },
    {
      id: 6,
      title: 'Attamala Glass Bridge',
      category: 'seo',
      client: 'Mr. Niyas – Wayanad',
      description:
        'Enhanced visibility through local SEO optimization and created engaging video shoots to highlight this iconic tourist attraction.',
      project: 'SEO, GMB, Video Shoot',
      image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&h=400&fit=crop',
      results: {
        visitors: '+350%',
        engagement: '+200%',
        searchRanking: 'Top 3 on Google',
      },
      technologies: ['SEO', 'GMB', 'Video Production'],
      link: '#',
    },
    {
      id: 7,
      title: 'La Meta Spices',
      category: 'branding',
      client: 'Mr. Niyas – Wayanad',
      description:
        'Developed a unique brand identity and created ad visuals that reflect the premium nature of this spice brand.',
      project: 'Logo Design, Ads',
      image: 'https://images.unsplash.com/photo-1605969826743-610e91b2a0d8?w=600&h=400&fit=crop',
      results: {
        brandAwareness: '+180%',
        reach: '+220%',
      },
      technologies: ['Brand Design', 'Meta Ads'],
      link: '#',
    },
    {
      id: 8,
      title: 'Soli Restaurant Qatar',
      category: 'branding',
      client: 'Mr. Shamil – Qatar',
      description:
        'Designed creative ad materials and developed a brand identity for a new dining experience in Qatar.',
      project: 'Logo Design, Ads',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop',
      results: {
        openingWeekVisitors: '2K+',
        engagement: '+180%',
      },
      technologies: ['Photoshop', 'Meta Ads', 'Branding'],
      link: '#',
    },
    {
      id: 9,
      title: 'Assist Health',
      category: 'medical-marketing',
      client: 'Dr. Vasu – Bangalore',
      description:
        'Created visually impactful poster designs and ad creatives for healthcare promotion across social media and print.',
      project: 'Poster Design, Ads',
      image: 'https://images.unsplash.com/photo-1588774069160-3b6c3e8f270b?w=600&h=400&fit=crop',
      results: {
        reach: '+200%',
        inquiries: '+160%',
      },
      technologies: ['Canva', 'Meta Ads', 'Creative Design'],
      link: '#',
    },
    {
      id: 10,
      title: 'Gava Erixmar Group',
      category: 'corporate',
      client:
        'Mr. Shemeer – Gava Erixmar Group (Sahhim Trading, In4 Logistics, Titan Oilfield, etc.)',
      description:
        'Provided a full digital suite — including logo design, SEO, website, and ad campaigns — across multiple global trading and logistics companies.',
      project: 'Logo, Ads, SEO, Website, Posters, GMB',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      results: {
        visibility: '+320%',
        leads: '+250%',
        engagement: '+210%',
      },
      technologies: ['SEO', 'Web Design', 'Ads', 'GMB'],
      link: '#',
    },
    {
      id: 11,
      title: 'Ree Krishna Nursing College',
      category: 'seo',
      client: 'Mr. Manoj – Thrissur',
      description:
        'Boosted local search presence and optimized their Google Business profile to attract more student inquiries.',
      project: 'GMB, SEO',
      image: 'https://images.unsplash.com/photo-1584697964403-355c1f44f9e6?w=600&h=400&fit=crop',
      results: {
        ranking: 'Top 5',
        inquiries: '+180%',
      },
      technologies: ['Local SEO', 'Google My Business'],
      link: '#',
    },
    {
      id: 12,
      title: 'Bee Connect',
      category: 'branding',
      client: 'Mr. Jossen – Bangalore',
      description:
        'Developed a clean and modern website, with logo and poster design for strong brand consistency across digital touchpoints.',
      project: 'Website, Logo, Posters, GMB',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      results: {
        engagement: '+150%',
        visitors: '+200%',
      },
      technologies: ['Angular', 'GMB', 'Brand Identity'],
      link: '#',
    },
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
