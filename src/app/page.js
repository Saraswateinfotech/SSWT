"use client";
import Header from "@/components/utilities/Header/Header";
import FooterPage from "@/components/utilities/Footer/FooterPage";
import Testimonial from "@/components/Home/01Testimonial/Testimonial";
import Contact from "@/components/Home/02Contact/Contact";
import Services from "@/components/Home/04Services/Services";
import Portfolio from "@/components/Home/05Portfolio/Portfolio";
import About from "@/components/Home/02About/About";
import HeroSection from "@/components/Home/01HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <FooterPage />
    </>
  );
}
