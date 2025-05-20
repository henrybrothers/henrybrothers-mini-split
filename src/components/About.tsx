
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
          
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="HVAC Professional" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581094282565-710cf5e7bdad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="HVAC Installation" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Mini Split System" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ductless AC Unit" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
