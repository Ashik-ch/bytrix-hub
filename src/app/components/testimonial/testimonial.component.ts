import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonial',
  imports: [FormsModule, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {



  testimonials = [
    {
      name: 'Rasha',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: `Honestly, Bytrix completely changed our online game. In just six months, our website traffic shot up by 300%. I'm seriously impressed with how much they improved our whole digital presence.`,
      rating: 5,
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHdGUIybC3GTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709126586790?e=2147483647&v=beta&t=70eN7o64dgDRvCNFS0E3px7PNUPB8xaZcAumihepGy8'
    },
    {
      name: 'Junaid P',
      company: 'Local Restaurant',
      role: 'Owner',
      content: `We started working with Bytrix on local SEO, and it made a huge difference. We're getting 50% more customers now.If you're a local business, you need to use them—highly recommend!`,
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdz5kFucdw2l7srdlElM15_DZlbH6DaE2G9Q&s'
    },
    {
      name: 'Soumya',
      company: 'Fashion Boutique',
      role: 'Marketing Director',
      content: `The social media campaigns Bytrix created were fantastic! They really understood our brand. Our engagement rates are through the top now—it was an amazing return on investment.`,
      rating: 5,
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQFSNOAzmQpesA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1620468840744?e=2147483647&v=beta&t=2JeSlyoWhsUSXngmoYOjsjKAuSrGYDBUu7pIrUftfHA'
    }
  ];
}
