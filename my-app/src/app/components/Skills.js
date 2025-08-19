import React from "react";
import portfolioData from "../data/page";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Skills = () => (
  <section className="mb-8">
    <h2 className="text-5xl uppercase text-center text-white font-light mb-2">
      Skills
    </h2>
    <div className=" mt-12  flex flex-wrap gap-8 justify-center">
      {portfolioData.skills.map((skill, idx) => (
        <Image
          src={skill.icon}
          className="w-18 h-18 contain rounded-md"
          key={idx}
          alt="Picture of the author"
        />
      ))}
    </div>
  </section>
);

export default Skills;
