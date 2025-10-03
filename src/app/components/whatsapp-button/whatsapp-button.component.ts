import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  isVisible = true;
  isExpanded = false;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  openWhatsApp() {
    const message = 'Hi! I\'m interested in your digital marketing services. Can you help me?';
    const phoneNumber = '+1234567890'; // Replace with actual phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openChat() {
    // This would integrate with a chat service like Intercom, Zendesk, etc.
    console.log('Opening chat...');
  }
}
