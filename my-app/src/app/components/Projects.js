"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import portfolioData from "../data/page";

const Projects = () => (
  <section>
    <h2 className="text-5xl font-light mb-9 mt-19 text-center text-white">
      Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {portfolioData.projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <a href="">
            <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
