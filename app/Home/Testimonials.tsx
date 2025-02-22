import React from "react";
import Image from "next/image";
import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  src: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    designation: "Marketing Director",
    quote:
      "PicLance transformed our social media presence completely. Their video editing is top-notch and the results have exceeded our expectations.",
    src: "/Testimonials/person1.jpeg",
  },
  {
    name: "Michael Rodriguez",
    designation: "Professional Photographer",
    quote:
      "The quality of photo editing and attention to detail is exceptional. Working with PicLance has elevated the quality of my portfolio significantly.",
    src: "/Testimonials/person2.jpeg",
  },
  {
    name: "Emma Thompson",
    designation: "Business Owner",
    quote:
      "Their social media management strategy has helped us double our engagement in just months. The team's creativity and expertise are unmatched.",
    src: "/Testimonials/person3.jpeg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-10 mb-10 px-4">
        <h2 className="text-5xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            What our clients say?
          </span>
        </h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
