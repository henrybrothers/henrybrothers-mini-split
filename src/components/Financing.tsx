
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Financing = () => {
  return (
    <section id="financing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 rounded-full mb-4 inline-block">Financing Options</span>
          <h2 className="section-title mb-6">Flexible Payment Plans</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We've partnered with Acorn Finance to offer flexible financing options for your HVAC projects. Get pre-qualified quickly without impacting your credit score.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="overflow-hidden border-none shadow-lg vintage-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-henry-navy mb-4">Pay for your project over time</h3>
                <p className="text-lg mb-6">
                  Break your project cost into monthly payments by seeing if you're pre-qualified by our network of top lenders.
                </p>
                
                <div className="flex items-center mb-6 bg-gray-50 p-3 rounded-lg">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800">Checking your rate won't impact your credit score</span>
                </div>
                
                <div className="text-center mt-4">
                  <a 
                    href="https://www.acornfinance.com/pre-qualify/?d=WBGOS&utm_medium=web_pre_qual_banner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-henry-navy hover:bg-henry-navy/90 text-white font-bold py-3 px-6 rounded-md text-lg">
                      Check Your Rate
                    </Button>
                  </a>
                </div>
                
                <div className="mt-6 text-center">
                  <img 
                    src="/lovable-uploads/14841db1-8a70-4c8b-896f-12adc6cf1927.png" 
                    alt="Acorn Finance QR code for pre-qualification" 
                    className="max-w-[200px] mx-auto"
                  />
                  <p className="text-sm text-gray-500 mt-2">Scan to check your rate on your phone</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="vintage-border bg-vintage-cream p-6 max-w-md">
              <h3 className="text-xl font-bold text-henry-navy mb-4">Why Finance With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Quick and easy application process",
                  "Multiple lender options for the best rates",
                  "Fixed monthly payments",
                  "No prepayment penalties",
                  "Funding as soon as next business day",
                  "Soft credit pull won't affect your score"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-henry-yellow rounded-full p-1 mr-3 mt-1 border border-henry-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-henry-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-vintage-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://www.acornfinance.com/pre-qualify/?d=WBGOS&utm_medium=web_pre_qual_banner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    style={{margin: "10px", padding: "1px", border: "1px solid black", borderRadius: "5px"}} 
                    src="https://fs.acornfinance.com/banners/acorn-finance-banner-easy-payment-options-vertical-small.png" 
                    alt="Acorn Finance apply and get affordable payment options from multiple lenders" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
