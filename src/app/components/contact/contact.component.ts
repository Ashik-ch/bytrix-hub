import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  services = [
    'SEO, Meta Ads, Google Ads',
    'Social Media Marketing',
    'Creative Services',
    'Web & App Development',
    'Local Business Growth',
    'Other'
  ];

  contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Offices',
      details: `
      <div class="space-y-2">
        <p><strong>🇶🇦 Qatar:</strong> Al Rayyan, Doha</p>
        <p><strong>🇦🇪 UAE:</strong> Bur Dubai, Dubai</p>
        <p><strong>🇮🇳 India:</strong> Kozhikode, Kerala</p>
      </div>
    `,
      color: 'text-primary-600'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone Numbers',
      details: `
      <div class="space-y-2">
        <p><strong>Qatar:</strong> <a href="tel:+97439956724" class="hover:text-primary-600">+974 3995 6724</a></p>
        <p><strong>Dubai:</strong> <a href="tel:+971557935653" class="hover:text-primary-600">+971 55 793 5653</a></p>
        <p><strong>Kerala:</strong> <a href="tel:+917356062242" class="hover:text-primary-600">+91 73560 62242</a></p>
      </div>
    `,
      color: 'text-accent-600'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: `
      <a href="mailto:info@bytrixhub.com" class="text-gray-700 hover:text-primary-600 transition">
        info@bytrixhub.com
      </a>
    `,
      color: 'text-primary-600'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: `
      <div class="space-y-1">
        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        <p>Sat: 10:00 AM - 4:00 PM</p>
        <p class="text-gray-500 text-sm">Closed on Sundays</p>
      </div>
    `,
      color: 'text-accent-600'
    }
  ];


  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'http://facebook.com/people/Bytrixhub/61582213150314/', color: 'bg-blue-600' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/bytrix.hub', color: 'bg-pink-600' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/bytrixhub', color: 'bg-blue-700' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/97439956727', color: 'bg-blue-400' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/bytrixhub', color: 'bg-red-600' }
  ];

  isSubmitting = false;
  submitSuccess = false;

  onSubmit() {
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;

      // Reset form
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      };

      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 2000);
  }

  openWhatsApp() {
    const message = `Hi! I'm interested in your digital marketing services. Here are my details:
    
Name: ${this.contactForm.name || 'Not provided'}
Email: ${this.contactForm.email || 'Not provided'}
Phone: ${this.contactForm.phone || 'Not provided'}
Company: ${this.contactForm.company || 'Not provided'}
Service: ${this.contactForm.service || 'Not specified'}

Message: ${this.contactForm.message || 'Please contact me for more information.'}`;

    const phoneNumber = '+97439956727';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Timelines vary depending on scope and complexity. A basic website might take 2–4 weeks, while a full marketing or personal branding campaign can take 3–6 months.',
    },
    {
      question: 'What’s included in the free consultation?',
      answer:
        'Our consultation includes a full digital presence audit, goal discussion, and personalized recommendations — plus a clear, customized proposal.',
    },
    {
      question: 'Do you work with small businesses and individuals?',
      answer:
        'Absolutely! We work with startups, small businesses, and professionals looking to grow their brand online.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer end-to-end digital solutions including SEO, Meta, Google Ads, Social Media Marketing, Creative Design, Web & App Development, Local Business Growth, and Personal Branding.',
    },
    {
      question: 'How long does it take to see results from SEO?',
      answer:
        'SEO is a long-term strategy. Most clients see noticeable improvements within 3–6 months, depending on competition and keywords.',
    },
    {
      question: 'How quickly can I see results from Google Ads?',
      answer:
        'Google Ads can generate leads and traffic almost instantly once the campaign is launched and optimized.',
    },
    {
      question: 'What’s included in your Personal Branding service?',
      answer:
        'We help professionals build a powerful online identity through Google Knowledge Panel setup, SEO for personal names, reputation management, and social media branding.',
    },
    {
      question: 'How do you measure success in personal branding?',
      answer:
        'We track metrics like search visibility, engagement growth, follower increase, and credibility through verified mentions and PR exposure.',
    },
    {
      question: 'Can you manage my social media accounts?',
      answer:
        'Yes! We handle strategy, content creation, posting, and paid campaigns across platforms like Instagram, LinkedIn, and Facebook.',
    },
    {
      question: 'What’s included in your Creative Services?',
      answer:
        'We offer logo design, brand identity, video creation, ad creatives, and visual storytelling that align perfectly with your brand.',
    },
    {
      question: 'Do you design and develop custom websites?',
      answer:
        'Yes. We create SEO-optimized, mobile-friendly websites that reflect your brand identity and convert visitors into clients.',
    },
    {
      question: 'Do you also build mobile apps?',
      answer:
        'Yes, we develop both Android and iOS apps focused on user experience, performance, and scalability.',
    },
    {
      question: 'How do you help local businesses grow?',
      answer:
        'We optimize Google Business Profiles, improve local SEO rankings, manage reviews, and run region-specific ad campaigns to attract nearby customers.',
    },
    {
      question: 'What makes your agency different?',
      answer:
        'We blend creativity with data-driven strategies, maintain full transparency, and stay up to date with the latest digital trends and technologies.',
    },
    {
      question: 'Do you provide reports and analytics?',
      answer:
        'Yes. Every campaign includes detailed performance reports and insights to help you understand your growth and ROI.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer:
        'Absolutely. We provide post-launch support, maintenance, and regular updates to ensure long-term success.',
    },
    {
      question: 'How do you price your services?',
      answer:
        'Pricing depends on the scope of work. We offer flexible packages and transparent quotes during your consultation.',
    },
    {
      question: 'How can I get started?',
      answer:
        'Simply book your free consultation. We’ll analyze your goals and create a personalized strategy to help you grow your brand online.',
    },
  ];
}