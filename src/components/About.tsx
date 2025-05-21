
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 rounded-full mb-4 inline-block">About Us</span>
            <h2 className="section-title mb-6">Meet The Henry Brothers</h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                Henry Brothers is a family-owned and operated HVAC company founded by Justin and Nick Henry. We specialize in ductless and mini split heating and cooling solutions for homes across Louisville, Kentucky and Southern Indiana.
              </p>
              
              <p className="text-gray-700 text-lg">
                Our mission is simple: to provide transparent HVAC services with an emphasis on ductless solutions. We believe in building long-term relationships with our customers based on trust and openness.
              </p>
              
              <div className="border-l-4 border-henry-yellow pl-4 py-2 bg-gray-50">
                <p className="text-lg italic text-gray-700">
                  "We started Henry Brothers because we saw a need for specialized expertise in ductless HVAC systems."
                </p>
                <p className="font-medium text-henry-navy mt-2">— Justin Henry, Co-owner</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="bg-henry-navy rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium">Insured</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-henry-navy rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium">Fast Response</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-henry-navy rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <div className="vintage-border bg-vintage-cream w-full sm:w-1/2 max-w-[300px] mx-auto">
              <img 
                src="/lovable-uploads/justin.jpg" 
                alt="Justin Henry - HVAC professional/Co-owner" 
                className="w-full h-auto object-cover object-top shadow-md"
              />
            </div>
            <div className="vintage-border bg-vintage-cream w-full sm:w-1/2 max-w-[300px] mx-auto">
              <img 
                src="/lovable-uploads/nick.jpg" 
                alt="Nick Henry - Marketer/Co-owner" 
                className="w-full h-auto object-cover object-top shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
