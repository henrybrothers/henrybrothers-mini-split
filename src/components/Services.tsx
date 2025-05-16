
import { Fan, AirVent, Thermometer, Wrench } from "lucide-react";

const services = [
  {
    title: "Mini Split Installation",
    description: "Expert installation of energy-efficient mini split systems perfect for homes without existing ductwork.",
    icon: AirVent,
  },
  {
    title: "Ductless System Repair",
    description: "Fast, reliable repairs for all brands and models of ductless air conditioning and heating systems.",
    icon: Wrench,
  },
  {
    title: "Clean and Check℠",
    description: "Our exclusive maintenance service that ensures your system operates at peak efficiency year-round.",
    icon: Thermometer,
  },
  {
    title: "Air Purification",
    description: "Improve your indoor air quality with our specialized filtration and purification solutions.",
    icon: Fan,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-vintage-cream vintage-texture distressed">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4 inline-block">
            <span className="retro-badge mb-4">Our Specialties</span>
          </div>
          <h2 className="section-title">Ductless HVAC Services</h2>
          <p className="text-vintage-dark max-w-2xl mx-auto">
            Henry Brothers specializes in mini split and ductless HVAC solutions, providing expert installation, maintenance, and repair services for homes and businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-wrapper bg-henry-navy text-henry-yellow p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-colors border-2 border-henry-yellow">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl font-heading mb-3">{service.title}</h3>
              <p className="text-vintage-dark">{service.description}</p>
              <a href="#contact" className="flex items-center text-henry-navy font-medium mt-4 hover:text-henry-yellow transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-henry-navy rounded-none p-8 vintage-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 vintage-text-shadow">Why Choose Ductless Systems?</h3>
              <ul className="space-y-3">
                {[
                  "Energy efficiency - save up to 30% on utility bills",
                  "Easy installation - no extensive ductwork required",
                  "Zone-by-zone comfort - control temperatures in individual rooms",
                  "Improved air quality - built-in air filtration and purification",
                  "Whisper-quiet operation compared to traditional systems"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-henry-yellow rounded-full p-1 mr-3 mt-1 border border-henry-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-henry-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-vintage-cream p-6 vintage-border">
              <h4 className="vintage-heading text-xl mb-4">Get a Free Consultation</h4>
              <p className="text-vintage-dark mb-6">
                Not sure if a ductless system is right for your space? Let our experts provide a personalized assessment and recommendation.
              </p>
              <button className="btn-primary w-full">Schedule a Consultation</button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="/lovable-uploads/62681387-cf05-4dd3-b835-9c9befdd1e9f.png" 
            alt="Vintage Air Conditioning Sign" 
            className="h-64 mx-auto mb-8"
          />
          <p className="italic text-vintage-dark">"The Henry Brothers - bringing vintage quality with modern efficiency"</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

