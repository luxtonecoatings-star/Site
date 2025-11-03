import { Phone, Mail, ArrowRight, Crown } from 'lucide-react';

function ContactCTA() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(30deg, transparent 40%, rgba(212,175,55,0.1) 45%, rgba(212,175,55,0.1) 55%, transparent 60%)`,
                backgroundSize: '200% 200%',
                animation: `royalShimmer${i + 1} 10s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
                transform: `rotate(${120 * i}deg)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Crown icon at the top */}
          <div className="flex justify-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 backdrop-blur-xl flex items-center justify-center">
              <Crown className="w-10 h-10 text-gold" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 bg-gradient-to-r from-gold via-gold/70 to-gold bg-clip-text text-transparent">
              Elevate Your Space
            </h2>
            <p className="text-2xl md:text-3xl text-gold/90 mb-6 font-heading">
              "Where Luxury Meets Craftsmanship"
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the pinnacle of painting excellence. Our master artisans are ready to transform your vision into a masterpiece of precision and elegance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-gold via-gold to-gold hover:from-gold/90 hover:via-gold/90 hover:to-gold/90 text-brand-dark px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl flex items-center space-x-3"
            >
              <span>Begin Your Transformation</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+15551234567"
              className="group bg-brand-dark hover:bg-black border-2 border-gold/20 hover:border-gold/40 px-10 py-5 rounded-xl text-xl font-bold text-gold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl backdrop-blur-sm flex items-center space-x-3"
            >
              <Phone className="w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-gold/80">
            <div className="flex items-center space-x-3 group">
              <Mail className="w-6 h-6 group-hover:text-gold transition-colors" />
              <span className="group-hover:text-gold transition-colors">contact@luxtone.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-gold rounded-full animate-pulse"></span>
              <span>Available for Luxury Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the animated background */}
      <style>{`
        @keyframes royalShimmer1 {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
        @keyframes royalShimmer2 {
          0%, 100% { background-position: 100% 0%; }
          50% { background-position: 0% 100%; }
        }
        @keyframes royalShimmer3 {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }
      `}</style>
    </section>
  );
}

export default ContactCTA;
