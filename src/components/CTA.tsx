
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-henry-navy vintage-texture">
      <div className="container mx-auto px-4">
        <div className="vintage-border bg-vintage-paper p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-henry-navy mb-4 vintage-text-shadow">
                Ready for Expert Ductless HVAC Service?
              </h2>
              <p className="text-vintage-dark text-lg mb-8">
                Contact Henry Brothers today for a free consultation on your mini split or ductless heating and cooling needs. Serving Louisville, KY and Southern Indiana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary text-lg">
                <a href="#contact">Get a free quote</a>
                </Button>
                <Button variant="outline" className="bg-transparent border-2 border-henry-navy text-henry-navy hover:bg-henry-navy hover:text-white font-bold py-3 px-6 transition-all text-lg">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="inline-block vintage-border bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-henry-navy rounded-full p-2 mr-3">
                    <Calendar className="h-6 w-6 text-henry-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-henry-navy">Schedule Now</h3>
                    <p className="text-vintage-dark">Book your service online</p>
                  </div>
                </div>
                <a href="/schedule" className="text-2xl font-bold text-henry-navy hover:text-henry-yellow transition-colors">Schedule Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
