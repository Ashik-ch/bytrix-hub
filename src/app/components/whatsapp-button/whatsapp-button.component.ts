import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  isVisible = true;
  isExpanded = false;
  showChat = false;

  userMessage = '';
  messages = [
    { from: 'bot', text: '👋 Hi there! Welcome to BytrixHub.' },
    { from: 'bot', text: 'How can we assist you today?' },
  ];

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  openWhatsApp() {
    const message = "Hi! I'm interested in your digital marketing services. Can you help me?";
    const phoneNumber = "+97439956727";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  openChat() {
    this.showChat = !this.showChat;
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.messages.push({ from: 'user', text: this.userMessage });
    const msg = this.userMessage.toLowerCase();
    this.userMessage = '';

    setTimeout(() => {
      if (msg.includes('web')) {
        this.messages.push({ from: 'bot', text: '🌐 We create fast, SEO-friendly websites. Want a free quote?' });
      } else if (msg.includes('seo')) {
        this.messages.push({ from: 'bot', text: '📈 We offer expert SEO to boost your Google ranking.' });
      } else if (msg.includes('marketing')) {
        this.messages.push({ from: 'bot', text: '🚀 Our digital marketing team can help grow your online reach.' });
      } else if (msg.includes('hello') || msg.includes('hi')) {
        this.messages.push({ from: 'bot', text: '👋 Hello! How can I assist you today?' });
      } else {
        this.messages.push({ from: 'bot', text: '😊 Thanks for your message! Our team will reach out soon.' });
      }
    }, 700);
  }
}
