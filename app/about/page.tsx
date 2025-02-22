"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/app/components/ui/sticky-roll-reveal";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;  // Changed from JSX.Element to React.ReactNode
}

const About: React.FC = () => {
  const content: ContentItem[] = [
    {
      title: "Our Mission",
      description: "We aim to revolutionize the way people interact with technology.",
      content: (
        <div className="relative w-full h-full">
          <Image 
            src="/HeroImages/mission.png" 
            alt="Our Mission" 
            fill
            className="object-cover"
            priority
          />
        </div>
      ),
    },
    {
      title: "Our Vision",
      description: "To create innovative solutions that empower businesses and individuals worldwide.",
      content: (
        <div className="relative w-full h-full">
          <Image 
            src="/HeroImages/vision.png" 
            alt="Our Vision" 
            fill
            className="object-cover"
            priority
          />
        </div>
      ),
    },
    {
      title: "Our Journey",
      description: "Explore our milestones and achievements over the years. Meet the brilliant minds behind our success story.",
      content: (
        <div className="relative w-full h-full">
          <Image 
            src="/HeroImages/work.png" 
            alt="Our Journey" 
            fill
            className="object-cover"
            priority
          />
        </div>
      ),
    },
    {
      title: "",
      description: "",
    },
  ];

  return (
    <div className="h-screen w-full">
      <StickyScroll content={content} />
    </div>
  );
};

export default About;