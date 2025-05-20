
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-henry-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/118bbfa7-3faf-421e-8fa2-60cefa7888fd.png" 
              alt="Henry Brothers Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Expert ductless and mini split HVAC solutions for residential properties in Louisville, KY and Southern Indiana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/thehenrybros/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-henry-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-henry-yellow">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-henry-yellow">About Us</a></li>
              <li><a href="#areas" className="text-gray-300 hover:text-henry-yellow">Service Areas</a></li>
              <li><a href="#clean-check" className="text-gray-300 hover:text-henry-yellow">Clean and Check℠</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-henry-yellow">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-henry-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18129941008" className="text-gray-300 hover:text-henry-yellow">(812) 994-1008</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-henry-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@thehenrybros.com" className="text-gray-300 hover:text-henry-yellow">hello@thehenrybros.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-henry-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Mon-Fri: 8am-6pm, Sat: 9am-2pm</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a href="#contact">
                <button className="btn-primary">
                  Request Service
                </button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Henry Brothers HVAC. All rights reserved.</p>
          <p className="mt-2 text-sm">
            "Clean and Check℠" is a service mark of Henry Brothers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
