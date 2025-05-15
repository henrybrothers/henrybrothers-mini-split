
const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Louisville, KY",
    text: "The Henry Brothers installed a mini split system in our sunroom that had always been too hot in summer and too cold in winter. Now it's the most comfortable room in the house! Justin and Nick were professional, knowledgeable, and cleaned up everything when they finished.",
    rating: 5
  },
  {
    name: "Michael Turner",
    location: "New Albany, IN",
    text: "I've used their Clean and Check service twice yearly for my ductless system, and it's been running flawlessly for over 5 years. They're always on time, thorough, and take the time to explain what they're doing. Great service!",
    rating: 5
  },
  {
    name: "Jennifer Davis",
    location: "Jeffersonville, IN",
    text: "After getting quotes from three companies, I chose Henry Brothers because they took the time to explain all my options and didn't try to upsell me on things I didn't need. The installation was quick and the system works perfectly.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-henry-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-henry-yellow text-henry-navy text-sm font-bold uppercase px-4 py-1 rounded-full mb-4 inline-block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Henry Brothers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-henry-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="italic mb-6 text-gray-200">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="bg-henry-yellow rounded-full w-10 h-10 flex items-center justify-center text-henry-navy font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://www.facebook.com/thehenrybros/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-henry-yellow hover:underline">
            See more reviews on Facebook
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
