
import { Button } from "@/components/ui/button";

const CleanCheck = () => {
  return (
    <section id="clean-check" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Clean and Check Service" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 rounded-full mb-4 inline-block">Our Signature Service</span>
            <h2 className="section-title">Clean and Check℠</h2>
            
            <p className="text-gray-700 text-lg mb-6">
              The Henry Brothers Clean and Check℠ is our exclusive maintenance service designed specifically for ductless and mini split systems. Unlike standard tune-ups offered by other companies, our comprehensive service ensures your system operates at peak efficiency year-round.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-henry-yellow p-6 mb-8">
              <h3 className="font-bold text-xl mb-4">What Our Clean and Check℠ Includes:</h3>
              <ul className="space-y-3">
                {[
                  "Deep cleaning of indoor and outdoor coils",
                  "Thorough sanitization of system components",
                  "Complete system performance evaluation",
                  "Filter replacement (as needed)",
                  "Refrigerant level check and adjustment",
                  "Electrical connections inspection",
                  "Condensate drain cleaning",
                  "Blower wheel cleaning",
                  "System operation test and calibration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-henry-yellow mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-henry-navy text-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-xl mb-1">Schedule Your Clean and Check℠ Today</h4>
                  <p className="text-gray-200">Protect your investment and ensure peak performance</p>
                </div>
                <Button className="btn-primary whitespace-nowrap">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading">Why Regular Maintenance Matters</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Extended System Life",
                description: "Regular maintenance can extend the life of your ductless system by up to 40%.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Energy Savings",
                description: "A well-maintained system uses up to 25% less energy than a neglected one.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Prevent Costly Repairs",
                description: "Regular maintenance can identify small issues before they become expensive problems.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-6 border border-gray-200 rounded-lg hover:border-henry-yellow hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanCheck;
