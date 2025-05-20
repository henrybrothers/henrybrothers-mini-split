import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 rounded-full mb-4 inline-block">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule service? Contact Henry Brothers today for expert ductless HVAC solutions. We're here to help!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="font-bold text-2xl mb-6">Send Us a Message</h3>
            
            <iframe
              src="https://tally.so/embed/woQ0AV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%" 
              height="500"
              title="Contact Form"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ border: "none" }}
            ></iframe>
          </div>
          
          <div>
            <div className="bg-henry-navy text-white rounded-lg shadow-lg p-6 md:p-8 h-full">
              <h3 className="font-bold text-2xl mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-henry-yellow mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-200">Call us for a free quote</p>
                    <a href="tel:+18129941008" className="text-henry-yellow hover:underline block mt-1">(812) 994-1008</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-henry-yellow mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-200">Send us an email anytime</p>
                    <a href="mailto:hello@thehenrybros.com" className="text-henry-yellow hover:underline block mt-1">hello@thehenrybros.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-henry-yellow mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Service Area</h4>
                    <p className="text-gray-200">Louisville, Kentucky and Southern Indiana (18-mile radius)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-henry-yellow mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <ul className="text-gray-200 space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Connect With Us</h4>
                  <a 
                    href="https://www.facebook.com/thehenrybros/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-henry-navy font-medium py-2 px-4 rounded-md inline-flex items-center hover:bg-henry-yellow transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Visit our Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
