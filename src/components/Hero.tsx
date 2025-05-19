
import { Button } from "@/components/ui/button";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <section className="relative bg-henry-navy vintage-texture min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-r from-henry-navy to-[#183761] opacity-95"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="mb-4 transform -rotate-2">
              <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 inline-block border-2 border-henry-navy">Since 2018</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6 vintage-text-shadow">
              Louisville's Ductless HVAC <span className="text-henry-yellow">Specialists</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Mini split and ductless heating & cooling solutions from the Henry Brothers.
              Expert installation, maintenance, and repair services for homes and businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact">
                <Button className="btn-primary text-lg">
                  Get a Free Quote
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-henry-navy font-bold py-3 px-6 transition-all text-lg">
                  Learn About Our Services
                </Button>
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="bg-henry-yellow rounded-full p-2 mr-3 border border-henry-navy">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-henry-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Family Owned</span>
              </div>
              <div className="flex items-center">
                <div className="bg-henry-yellow rounded-full p-2 mr-3 border border-henry-navy">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-henry-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">5-Star Service</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
