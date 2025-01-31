import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

// Assets
import ProfilePic from '../../assets/profile-pic.png';

const testimonials = [
  {
    name: 'Esther Howard',
    position: 'CEO Themesflat',
    image: ProfilePic,
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
  },
  {
    name: 'Annette Black',
    position: 'CEO Themesflat',
    image: ProfilePic,
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
  },
  {
    name: 'Bessie Cooper',
    position: 'CEO Themesflat',
    image: ProfilePic,
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
  },
  {
    name: 'Courtney Henry',
    position: 'CEO Themesflat',
    image: ProfilePic,
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h4 className="testimonial-subtitle">OUR TESTIMONIALS</h4>
      <h2 className="testimonial-title">What’s People Say’s</h2>
      <p className="testimonial-description">
        Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
      </p>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <blockquote>
              <span className="quote">&ldquo;</span>
              <p className="testimonial-text">{testimonial.review}</p>
            </blockquote>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-position">{testimonial.position}</p>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;