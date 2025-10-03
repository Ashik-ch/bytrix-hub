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
      title: 'Address',
      details: '123 Business Street<br>City, State 12345',
      color: 'text-primary-600'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+1 (234) 567-890',
      color: 'text-accent-600'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'hello@bytrix.com',
      color: 'text-primary-600'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 4:00 PM',
      color: 'text-accent-600'
    }
  ];

  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/bytrix', color: 'bg-blue-600' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/bytrix', color: 'bg-pink-600' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/bytrix', color: 'bg-blue-700' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/bytrix', color: 'bg-blue-400' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/bytrix', color: 'bg-red-600' }
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
      
      // Hide success message after 5 seconds
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
    
    const phoneNumber = '+1234567890'; // Replace with actual phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
