import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StickyScroll } from "../components/ui/sticky-roll-reveal";

const About = () => {
  const content = [
    {
      title: "Our Mission",
      description: "We aim to revolutionize the way people interact with technology.",
      content: <img src="/mission.jpg" alt="Our Mission" className="h-full w-full " />,
    },
    {
      title: "Our Vision",
      description: "To create innovative solutions that empower businesses and individuals worldwide.",
      content: <img src="/vision.jpg" alt="Our Vision" className="h-full w-full " />,
    },
    {
      title: "Our Journey",
      description: "Explore our milestones and achievements over the years.Meet the brilliant minds behind our success story.Meet the brilliant minds behind our success story.",
      content: <img src="/journey.jpg" alt="Our Journey" className="h-full w-full " />,
    },
    {
      title: "",
      description: ""
    },
  ];

  return (
    <div className="h-screen w-full">
      <Navbar />
      <StickyScroll content={content} />
      <Footer />
    </div>
  );
};

export default About;
