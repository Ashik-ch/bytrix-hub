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
      category: 'marketing',
      client: 'Dr. Saigeetha CM – Bangalore',
      description:
        'Helped build a trusted online presence for a skin and hair clinic through ads, branding, and local optimization.',
      project: 'Meta Ads, Google Ads, Logo, Poster Design, GMB, Social Media',
      chalanges:
        'Making a medical brand approachable while complying with strict advertising rules.',
      solution:
        'Developed compliant yet engaging visuals and ad creatives that built patient trust.',
      image:
        'https://d2ki7eiqd260sq.cloudfront.net/Filler_HR-12-1-f3a7b1fe-b6bc-4e67-97a8-dec051d15223.jpg',
      results: {
        engagement: '+120%',
        leads: '+80%',
      },
      technologies: ['Meta Ads', 'Google Ads', 'Brand Design'],
      link: '#',
    },
    {
      id: 2,
      title: 'G Tec Kalpetta',
      category: 'social-media',
      client: 'Mr. Divyaanand',
      description:
        'Boosted student engagement and visibility for a local education brand.',
      project: 'Social Media, Ads, GMB',
      chalanges: 'Standing out in a highly competitive local education market.',
      solution:
        'Launched creative campaigns and relatable content to connect with students locally.',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
      results: {
        followers: '+300%',
        inquiries: '+150%',
      },
      technologies: ['Facebook Ads', 'GMB', 'Canva'],
      link: '#',
    },
    {
      id: 3,
      title: 'Health Gloss Legal Service',
      category: 'marketing',
      client: 'Ms. Renuka – USA',
      description:
        'Created a professional and credible website for U.S.-based legal clients.',
      project: 'Website, SEO, GMB',
      chalanges: 'Adapting brand tone and design for the U.S. legal market.',
      solution:
        'Developed SEO-friendly content and a modern interface reflecting trust and expertise.',
      image:
        'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&h=400&fit=crop',
      results: {
        organicTraffic: '+180%',
        conversions: '+90%',
      },
      technologies: ['SEO', 'Angular', 'Content Strategy'],
      link: '#',
    },
    {
      id: 4,
      title: 'Vythiri Greens & DJ Medavos Resorts',
      category: 'marketing',
      client: 'Mr. Lijin – Vythiri, Wayanad',
      description:
        'Developed websites and marketing strategies for multiple resort properties.',
      project: 'Website, GMB, Ads, SEO',
      chalanges: 'Maintaining unique identities for each resort under one brand.',
      solution:
        'Created distinct designs and localized SEO strategies for each property.',
      image: 'https://www.vythirivillage.com/wp-content/uploads/2020/11/rooms-banner.jpg',
      results: {
        bookings: '+220%',
        brandAwareness: '+160%',
      },
      technologies: ['SEO', 'GMB', 'Angular'],
      link: '#',
    },
    {
      id: 5,
      title: 'Bright Eduway & Exter Qatar',
      category: 'marketing',
      client: 'Mr. Kamal – Qatar',
      description:
        'Built complete digital marketing systems for two educational brands in Qatar.',
      project: 'Website, SEO, Ads, Posters, Video',
      chalanges: 'Handling multilingual content and ad compliance across regions.',
      solution:
        'Localized marketing campaigns and optimized targeting to reach ideal audiences.',
      image: 'https://brighteduway.com/wp-content/uploads/2024/11/IMG_0899-scaled.jpg',
      results: {
        leads: '+170%',
        visibility: '+190%',
      },
      technologies: ['SEO', 'Google Ads', 'Video Editing'],
      link: '#',
    },
    {
      id: 6,
      title: 'Attamala Glass Bridge',
      category: 'marketing',
      client: 'Mr. Niyas – Wayanad',
      description:
        'Enhanced the online visibility of a thrilling adventure attraction.',
      project: 'SEO, GMB, Video Shoot',
      chalanges: 'Capturing the adventure experience authentically on camera.',
      solution:
        'Used drone videography and dynamic storytelling to convey excitement and trust.',
      image: 'https://tripinic.com/wp-content/uploads/2024/01/Attamala-Digital-Glass-Bridge.jpg',
      results: {
        engagement: '+250%',
        tourists: '+180%',
      },
      technologies: ['SEO', 'Video Production', 'GMB'],
      link: '#',
    },
    {
      id: 7,
      title: 'Soli Restaurant',
      category: 'marketing',
      client: 'Mr. Shamil – Qatar',
      description:
        'Launched a strong visual identity for a new restaurant brand.',
      project: 'Logo & Ads',
      chalanges: 'Standing out in a crowded restaurant market.',
      solution:
        'Created teaser ads, branding assets, and identity-driven ad campaigns.',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b0/79/a1/comedor-principal-vista.jpg?w=900&h=-1&s=1',
      results: {
        brandReach: '+210%',
        sales: '+120%',
      },
      technologies: ['Brand Design', 'Meta Ads', 'Illustrator'],
      link: '#',
    },
    {
      id: 8,
      title: 'Ammathi Dive Centre',
      category: 'marketing',
      client: 'Mr. Shemeer – Lakshadweep',
      description: 'Promoted diving experiences through visual storytelling.',
      project: 'Video, Poster, Ads',
      chalanges: 'Filming underwater in challenging environmental conditions.',
      solution:
        'Used professional underwater gear and dynamic editing to capture the experience.',
      image:
        'https://www.tripplannersindia.com/assets/images/page/Lakshadweep_Scuba_Diving_Tour_Package.webp',
      results: {
        videoViews: '+300%',
        inquiries: '+200%',
      },
      technologies: ['Video Editing', 'Ads', 'Canva'],
      link: '#',
    },
    {
      id: 9,
      title: 'Oraina',
      category: 'marketing',
      client: 'Mr. Shahir – Dubai',
      description:
        'Crafted a clean, minimal, and luxurious logo design for a premium brand.',
      project: 'Logo Design',
      chalanges: 'Creating a premium look while maintaining simplicity.',
      solution:
        'Used minimal design principles and elegant colors for timeless appeal.',
      image:
        'https://card.oraina.in/wl/oraina/og.png',
      results: {
        impressions: '+150%',
        brandRecognition: '+100%',
      },
      technologies: ['Illustrator', 'Photoshop', 'Brand Identity'],
      link: '#',
    },
    {
      id: 10,
      title: 'Gava Erixmar Group',
      category: 'marketing',
      client: 'Mr. Shemeer – Gava Erixmar Group',
      description:
        'Handled complete marketing for a corporate group with 8 sub-brands.',
      project: 'Logo, Ads, SEO, Website, Posters, GMB',
      chalanges:
        'Maintaining individual brand identities while ensuring group cohesion.',
      solution:
        'Implemented a unified design system and synchronized marketing strategies across all brands.',
      image: 'https://gavaerixmar.com/Assets/images/logo/gavaart.png',
      results: {
        networkGrowth: '+180%',
        efficiency: '+130%',
      },
      technologies: ['SEO', 'Angular', 'Meta Ads'],
      link: '#',
    },
    {
      id: 12,
      title: 'Bee Connect',
      category: 'web-development',
      client: 'Mr. Jossen – Bangalore',
      description:
        'Developed a clean and modern website, with logo and poster design for strong brand consistency across digital touchpoints.',
      project: 'Website, Logo, Posters, GMB',
      chalanges: 'Ensuring cohesive branding across multiple digital assets.',
      solution:
        'Designed unified brand visuals and optimized GMB listings for improved reach.',
      image: 'https://uploads3.fw360.it/uploads/env/4/front/img/blog/posts/honey-website-sales.png',
      results: {
        engagement: '+150%',
        visitors: '+200%',
      },
      technologies: ['Angular', 'GMB', 'Brand Identity'],
      link: '#',
    },
    {
      id: 13,
      title: 'ClearGo Deep Cleaning Services',
      category: 'web-development',
      client: 'ClearGo – Calicut',
      description:
        'Designed and developed a professional service website for ClearGo, a Calicut-based deep cleaning company. The website highlights their services, booking options, and client trust with a modern, SEO-optimized design.',
      project: 'Website, SEO, GMB Optimization, Content & Design',
      challenges:
        'Building trust and visibility for a new local cleaning service in a competitive market.',
      solution:
        'Created a clean, responsive website focused on service clarity and strong visuals. Optimized Google Business Profile and SEO content to drive local inquiries and conversions.',
      image: 'assets/images/web.png',
      results: {
        traffic: '+180%',
        inquiries: '+220%',
      },
      technologies: ['Angular', 'SEO', 'GMB', 'Content Strategy'],
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
