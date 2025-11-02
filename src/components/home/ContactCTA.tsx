import { Phone, Mail, ArrowRight } from 'lucide-react';

function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 italic">
            "Quality is never an accident; it is always the result of intelligent effort."
          </p>
          <p className="text-lg text-blue-100 mb-12">
            Get a free consultation and quote today. Our experts are ready to bring your vision to life with precision and care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+15551234567"
              className="bg-blue-700 hover:bg-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@elitepainting.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Available 7 Days a Week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
