import React from "react";
import portfolioData from "../data/page";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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

      <div className="flex gap-3 mt-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923345853969"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
            <FaWhatsapp />
          </Button>
        </a>

        {/* Instagram Button */}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
            <FaInstagram />
          </Button>
        </a>

        {/* Gmail Button */}
        <a href="mailto:amar.jaleel2@gmail.com">
          <Button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
            <SiGmail />
          </Button>
        </a>
      </div>
    </section>
  </div>
);

export default Header;
