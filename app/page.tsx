"use client";
import { Contact, Footer, Hero, NavBar, Testimonials } from "@/components";
import Carousel from "@/components/Brand";
import Projects from "@/components/Home/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Testimonials />
      <Carousel />
      <Footer />
    </>
  );
}
