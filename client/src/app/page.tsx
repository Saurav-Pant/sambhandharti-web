import Hero from "@/components/Hero";
import Carousel from "@/components/carouselImgSlider";

import React from "react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FounderNote from "@/components/FounderNote";

const page = () => {
  return (
    <div className="min-h-screen ">
      <Hero className="relative z-10 min-h-[60vh]" />
      <Carousel className="relative z-0 sm:mt-0 mt-44 overflow-hidden" />
      <Testimonials/>
      <FounderNote/>
      <Footer/>
    {/* <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
            <p className="text-lg">We are working hard to bring you this page. Stay tuned!</p>
        </div>
    </div> */}
    </div>
  );
};

export default page;
