import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#182845] shadow-md py-2' : 'bg-[#182845] py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/henrybrothers-logo-bg.png" 
            alt="Henry Brothers Logo" 
            className="h-16 w-auto"
          />
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#services" className="text-white font-medium hover:text-henry-yellow transition-colors">Services</a>
            <a href="#about" className="text-white font-medium hover:text-henry-yellow transition-colors">About</a>
            <a href="#areas" className="text-white font-medium hover:text-henry-yellow transition-colors">Service Areas</a>
            <a href="#clean-check" className="text-white font-medium hover:text-henry-yellow transition-colors">Clean and Check℠</a>
            <a href="#contact" className="text-white font-medium hover:text-henry-yellow transition-colors">Contact</a>
          </nav>
          
          <Button className="btn-primary flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <a href="/schedule"><span>Schedule Now</span></a>
          </Button>
        </div>
        
        <button 
          className="lg:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#182845] border-t border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-white font-medium hover:text-henry-yellow transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-white font-medium hover:text-henry-yellow transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#areas" className="text-white font-medium hover:text-henry-yellow transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Service Areas</a>
              <a href="#clean-check" className="text-white font-medium hover:text-henry-yellow transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Clean and Check℠</a>
              <a href="#contact" className="text-white font-medium hover:text-henry-yellow transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              
              <Button className="btn-primary flex items-center space-x-2 justify-center mt-2">
                <Calendar className="h-4 w-4" />
                <a href="/schedule"><span>Schedule Now</span></a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
