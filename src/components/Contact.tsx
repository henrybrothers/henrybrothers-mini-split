
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { // Replace YOUR_FORM_ID with your actual Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
                    placeholder="Your name" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
                    placeholder="Your phone number" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
                  placeholder="Your email address" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-henry-yellow"
                >
                  <option value="">Select a service</option>
                  <option value="Mini Split Installation">Mini Split Installation</option>
                  <option value="Ductless System Repair">Ductless System Repair</option>
                  <option value="Clean and Check℠">Clean and Check℠</option>
                  <option value="Air Purification">Air Purification</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
                  placeholder="Tell us about your needs"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full md:w-auto flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
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
                    <a href="tel:+15025551234" className="text-henry-yellow hover:underline block mt-1">(502) 555-1234</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-henry-yellow mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-200">Send us an email anytime</p>
                    <a href="mailto:info@thehenrybros.com" className="text-henry-yellow hover:underline block mt-1">info@thehenrybros.com</a>
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
                        <span>8:00 AM - 6:00 PM</span>
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
