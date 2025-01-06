import React from "react";
import { AnimatedTestimonials } from "../components/ui/animatedTestimonials";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      designation: "Marketing Director",
      quote: "PicLance transformed our social media presence completely. Their video editing is top-notch and the results have exceeded our expectations.",
      src: "/person1.jpeg"
    },
    {
      name: "Michael Rodriguez",
      designation: "Professional Photographer",
      quote: "The quality of photo editing and attention to detail is exceptional. Working with PicLance has elevated the quality of my portfolio significantly.",
      src: "/person2.jpeg"
    },
    {
      name: "Emma Thompson",
      designation: "Business Owner",
      quote: "Their social media management strategy has helped us double our engagement in just months. The team's creativity and expertise are unmatched.",
      src: "/person3.jpeg"
    }
  ];

  return (
    <section>
      <div className="container mx-auto mt-10 mb-10">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
          What Our Clients Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
      </div>
    </section>
  );
};

export default TestimonialsSection;