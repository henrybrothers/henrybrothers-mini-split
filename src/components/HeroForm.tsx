
import React from "react";

const HeroForm = () => {
  return (
    <div className="vintage-border bg-vintage-cream distressed">
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-henry-navy mb-1">Schedule Your Service</h3>
          <p className="text-vintage-dark mb-6 text-sm">Expert ductless HVAC solutions for your home</p>
        </div>
        
        <iframe
          src="https://tally.so/embed/woQ0AV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="400"
          title="Contact Form"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default HeroForm;
