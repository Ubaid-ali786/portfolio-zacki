"use client";

import { About } from "@/sections/About";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Internship } from "@/sections/Internship";
import { Skills } from "@/sections/Skills";
import { Tools } from "@/sections/Tools";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Internship />
      <Education />
      <Tools />
      <Certifications />
      <Contact />
    </Box>
  );
}
