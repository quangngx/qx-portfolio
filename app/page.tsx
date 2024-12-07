"use client";
import { Contact, Footer, Hero, NavBar, Testimonials } from "@/components";
import Projects from "@/components/Home/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Testimonials />
      {/*<Carousel />*/}
      <Footer />
    </>
  );
}
