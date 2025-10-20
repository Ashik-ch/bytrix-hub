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
    'SEO & Google Ads',
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
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/bytrixhub', color: 'bg-blue-600' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/bytrixhub', color: 'bg-pink-600' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/bytrixhub', color: 'bg-blue-700' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/bytrixhub', color: 'bg-blue-400' },
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
}
