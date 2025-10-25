import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsList: NewsItem[] = [
    {
      title: 'Apple Unveils iPhone 17 Pro — The Future in Your Palm',
      date: 'October 20, 2025',
      category: 'Technology',
      image: 'https://applepremiumstore.com.ng/wp-content/uploads/2025/07/G0bLx54WEAA6dVj.jpg-large.jpeg',
      description:
        'Apple’s new iPhone 17 Pro introduces neural-engine powered photography, a holographic display, and ultra-efficient A21 chip — redefining the mobile experience. Learn how this will influence mobile web design trends in 2026.',
      link: '#'
    },
    {
      title: 'BytrixHub Officially Launches — The Future of Creative IT Solutions',
      date: 'October 10, 2025',
      category: 'Company',
      image: 'assets/images/Bytrix-01.png',
      description:
        'We’re proud to announce the official launch of BytrixHub — your one-stop destination for futuristic web development, SEO, marketing, and brand innovation. Designed with modern aesthetics and powerful technology, BytrixHub redefines digital presence.',
      link: '#'
    },
    {
      title: 'ChatGPT & Beyond — How AI is Transforming Creative Workflows',
      date: 'October 5, 2025',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
      description:
        'From automating code to writing compelling content, AI tools like ChatGPT are empowering creative professionals and businesses to accelerate innovation. Here’s how BytrixHub integrates AI into everyday client solutions.',
      link: '#'
    },
    {
      title: 'Web 4.0 is Coming — Preparing Businesses for the Connected Future',
      date: 'September 30, 2025',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=900&h=600&fit=crop',
      description:
        'The internet is evolving into a fully immersive, intelligent, and personalized environment. Discover how BytrixHub helps businesses future-proof their digital ecosystems with adaptive web design and semantic AI tools.',
      link: '#'
    },
    {
      title: 'Designing for the Metaverse — Creative Rules are Changing',
      date: 'September 15, 2025',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=900&h=600&fit=crop',
      description:
        'Virtual spaces demand new design principles — from depth-aware UI to immersive storytelling. Our design team shares insights on crafting futuristic digital experiences for the metaverse generation.',
      link: '#'
    }
  ];
}
