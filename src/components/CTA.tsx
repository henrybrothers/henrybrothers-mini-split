
import { Button } from "@/components/ui/button";

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
                  Get a Free Quote
                </Button>
                <Button variant="outline" className="bg-transparent border-2 border-henry-navy text-henry-navy hover:bg-henry-navy hover:text-white font-bold py-3 px-6 transition-all text-lg">
                  Contact Us
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="inline-block vintage-border bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-henry-navy rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-henry-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-henry-navy">Call Us Today</h3>
                    <p className="text-vintage-dark">For immediate assistance</p>
                  </div>
                </div>
                <a href="tel:+15025551234" className="text-2xl font-bold text-henry-navy hover:text-henry-yellow transition-colors">(502) 555-1234</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

