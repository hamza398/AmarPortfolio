import React from "react";
import kotlinImg from "@/images/Kotlin.png";
import javaImg from "@/images/Java.png";
import As from "@/images/AndroidStudio.png";
import SQ from "@/images/SQlite.jpg";
import jibble from "@/images/jibble.png";
import jet from "@/images/Jetpack.png";
import Rest from "@/images/REST_socialmedia.webp";
import Glide from "@/images/Glide_logo.png";
import retro from "@/images/retrofit.png";
import XML from "@/images/XMl.png";
import sdk from "@/images/androidsdk.jpg";
import git from "@/images/Git_icon.svg.png";
import github from "@/images/github.png";

const portfolioData = {
  name: "Hi , I'm Amar Jalil 👋",
  title: "Skilled Android Developer",
  experience: "3 years",
  overview:
    "Skilled Android Developer with 3 years of experience in designing, developing, and maintaining innovative mobile applications. Proficient in leveraging modern technologies, including Jetpack Compose, to create seamless, user-friendly, and high-performance applications. Passionate about staying up-to-date with the latest industry trends and continuously improving skills to contribute to the success of every project undertaken.",
  skills: [
    { name: "Kotlin", icon: kotlinImg },
    { name: "Java", icon: javaImg },
    { name: "Android Studio", icon: As },
    { name: "SQLite", icon: SQ },
    { name: "Jibble", icon: jibble },
    { name: "Jetpack Compose", icon: jet },
    { name: "REST", icon: Rest },
    { name: "Glide", icon: Glide },
    { name: "Retro", icon: retro },
    { name: "XML", icon: XML },
    { name: "SDK", icon: sdk },
    { name: "Git", icon: git },
    { name: "Github", icon: github },
  ],
  projects: [
    {
      title: "PDF Creator",
      description: "Creates PDFs from text, images, contacts, and HTML.",
    },
    {
      title: "Document Converter",
      description: "Converts PPT, Word, and XLS files into PDF format.",
    },
    {
      title: "QR and Barcode Scanner",
      description: "Scans and generates QR codes and barcodes.",
    },
    {
      title: "Document Scanner",
      description:
        "Creates PDFs by scanning documents such as ID cards, passports, and QR codes.",
    },
    {
      title: "Plant Detection",
      description:
        "Identifies plant species using an AI-powered model implemented through TensorFlow.",
    },
    {
      title: "Jobs Shopper",
      description:
        "A mobile platform that allows job seekers to apply for and track job listings, and enables employers to manage job posts and applications.",
    },
  ],
};

export default portfolioData;
