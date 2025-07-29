
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
import JsonLdSchema from "@/components/JsonLdSchema";
import { localBusinessSchema, organizationSchema, breadcrumbSchema, webSiteSchema, reviewsSchema } from "@/utils/schemaData";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLdSchema schemaData={localBusinessSchema} />
      <JsonLdSchema schemaData={organizationSchema} />
      <JsonLdSchema schemaData={breadcrumbSchema} />
      <JsonLdSchema schemaData={webSiteSchema} />
      {reviewsSchema.map((review, index) => (
        <JsonLdSchema key={index} schemaData={review} />
      ))}
      
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
