import React from "react";
import portfolioData from "../data/page";
import { Button } from "@/components/ui/button";

const Header = () => (
  <div className="flex flex-col justify-center h-[50vh] w-full px-4 md:px-8 lg:px-16 space-y-4">
    <section className="space-y-2 w-full md:w-4/6 lg:w-3/6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white capitalize font-light">
        {portfolioData.name}
      </h1>
      <p className="text-xs sm:text-sm mt-4 text-white uppercase">
        {portfolioData.title} — {portfolioData.experience}
      </p>
      <p className="text-sm sm:text-base text-gray-300 mt-5">
        {portfolioData.overview}
      </p>
      <Button variant="secondary" className="mt-2">
        Contact Me
      </Button>
    </section>
  </div>
);

export default Header;
