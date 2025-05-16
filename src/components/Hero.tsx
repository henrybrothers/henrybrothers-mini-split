
import { Button } from "@/components/ui/button";

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
              <Button className="btn-primary text-lg">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-henry-navy font-bold py-3 px-6 transition-all text-lg">
                Learn About Our Services
              </Button>
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
            <div className="vintage-border bg-vintage-cream distressed">
              <div className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src="/lovable-uploads/e46e0cbc-5684-4ea7-ba0d-12bf372f3765.png" 
                    alt="Henry Brothers" 
                    className="h-32 mx-auto mb-2"
                  />
                  <h3 className="text-2xl font-bold text-henry-navy mb-1">Schedule Your Service</h3>
                  <p className="text-vintage-dark mb-6 text-sm">Expert ductless HVAC solutions for your home or business</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow" />
                  </div>
                  <div>
                    <textarea placeholder="Tell us about your needs" rows={2} className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow"></textarea>
                  </div>
                  <Button className="btn-primary w-full text-lg">
                    Request Service
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

