
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const HeroForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_HERO_FORM_ID", { // Replace with your actual Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your service request has been sent. We'll contact you shortly.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vintage-border bg-vintage-cream distressed">
      <div className="p-6">
        <div className="text-center mb-4">
          <img 
            src="./lovable-uploads/e46e0cbc-5684-4ea7-ba0d-12bf372f3765.png" 
            alt="Henry Brothers" 
            className="h-32 mx-auto mb-2"
          />
          <h3 className="text-2xl font-bold text-henry-navy mb-1">Schedule Your Service</h3>
          <p className="text-vintage-dark mb-6 text-sm">Expert ductless HVAC solutions for your home or business</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
              required
            />
          </div>
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
              required
            />
          </div>
          <div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow" 
              required
            />
          </div>
          <div>
            <textarea 
              name="message" 
              placeholder="Tell us about your needs" 
              value={formData.message}
              onChange={handleChange}
              rows={2} 
              className="w-full px-4 py-2 border-2 border-henry-navy bg-vintage-cream focus:outline-none focus:ring-2 focus:ring-henry-yellow"
            ></textarea>
          </div>
          <Button 
            className="btn-primary w-full text-lg flex items-center justify-center"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : "Request Service"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
