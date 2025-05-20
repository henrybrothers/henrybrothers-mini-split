
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 pt-10">
        <div className="text-center mb-12">
          <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 rounded-full mb-4 inline-block">Service Areas</span>
          <h2 className="section-title">Where We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Henry Brothers provides expert ductless HVAC services throughout Louisville, Kentucky and Southern Indiana. Our service area extends approximately 18 miles outside of Louisville.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl font-heading mb-6 border-b border-gray-200 pb-4">
              Communities We Serve
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h4 className="font-bold text-lg mb-3 text-henry-navy">Kentucky</h4>
                <ul className="space-y-2">
                  {[
                    "Louisville",
                    "St. Matthews",
                    "Jeffersontown",
                    "Middletown",
                    "Prospect",
                    "Okolona",
                    "Shively",
                    "Valley Station"
                  ].map((area, i) => (
                    <li key={i} className="flex items-center">
                      <MapPin className="h-4 w-4 text-henry-yellow mr-2" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-henry-navy">Indiana</h4>
                <ul className="space-y-2">
                  {[
                    "Clarksville",
                    "Jeffersonville",
                    "New Albany",
                    "Sellersburg",
                    "Charlestown",
                    "Floyd Knobs",
                    "Georgetown"
                  ].map((area, i) => (
                    <li key={i} className="flex items-center">
                      <MapPin className="h-4 w-4 text-henry-yellow mr-2" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Not sure if you're within our service area? Give us a call and we'll be happy to assist you!
              </p>
              <a href="tel:+18129941008">
                <button className="btn-primary mt-4">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199434.3564566454!2d-85.94962159646437!3d38.18875372731785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4d3b4282071fd32!2sLouisville%2C%20KY!5e0!3m2!1sen!2sus!4v1621532289085!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Service Area Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
