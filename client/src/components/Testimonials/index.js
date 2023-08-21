import React from 'react'

const testimonials = [
    {
      quote: "I love E-Shop! The prices are unbeatable, and the quality is top-notch.",
      author: "Jane Doe",
    },
    {
      quote: "E-Shop has made shopping for tech products a breeze. Highly recommended!",
      author: "John Smith",
    },
    // Add more testimonials here
  ];
  
export default function Testimonials() {
  return (
    <div className="col">
          <h2 className="text__primary">Testimonials</h2>
          <div className="testimonial__cards">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card testimonial__card mb-3">
                <div className="card-body">
                  <p className="card-text">{testimonial.quote}</p>
                  <p className="card-text testimonial__author">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}
