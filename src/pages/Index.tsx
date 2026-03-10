
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import CleanCheck from "@/components/CleanCheck";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Financing from "@/components/Financing";
import {
  LocalBusinessSchema,
  OrganizationSchema,
  WebSiteSchema,
  ReviewSchema,
  BreadcrumbSchema,
} from "@/components/schema";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebSiteSchema />
      <ReviewSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://thehenrybros.com" },
        { name: "Services", url: "https://thehenrybros.com#services" },
        { name: "About", url: "https://thehenrybros.com#about" },
        { name: "Contact", url: "https://thehenrybros.com#contact" },
      ]} />
      
      <Header />
      <Hero />
      <CleanCheck />
      <Services />
      <About />
      <ServiceAreas />
      <Financing />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
