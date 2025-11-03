import { Crown, Award, Users, Paintbrush, Star } from 'lucide-react';

export default function About() {
  return (
    <main className="flex-grow bg-brand-dark min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Diagonal Stripes */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 45%, ${i % 2 === 0 ? '#D4AF37' : '#B4943E'} 49%, ${i % 2 === 0 ? '#D4AF37' : '#B4943E'} 51%, transparent 55%)`,
                backgroundSize: '200% 200%',
                animation: `royalMove${i + 1} ${15 + i * 2}s linear infinite`,
                transform: `scale(1.5) rotate(${i * 15}deg)`,
              }}
            />
          ))}
        </div>

        {/* Radial Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-xl flex items-center justify-center">
                <Crown className="w-10 h-10 text-gold" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-gold via-gold/80 to-gold bg-clip-text text-transparent">
              The Legacy of Excellence
            </h1>
            <p className="text-2xl text-gold/80 font-heading max-w-3xl mx-auto">
              Crafting Luxury Spaces Since 2010
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-gold/10 hover:border-gold/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold mb-4">Premium Craftsmanship</h3>
                    <p className="text-gray-300 leading-relaxed">
                      For over 15 years, Luxtone Coating has been setting the gold standard in luxury painting services. Our certified artisans bring decades of combined expertise to every project, ensuring unparalleled quality and attention to detail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-gold/10 hover:border-gold/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center shrink-0">
                    <Paintbrush className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold mb-4">Elite Materials</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We exclusively use premium-grade materials from industry-leading brands. Our meticulous preparation processes and precision application techniques ensure flawless results that stand the test of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 md:mt-12">
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-gold/10 hover:border-gold/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold mb-4">Client Excellence</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our unwavering commitment to customer satisfaction has earned us a loyal clientele. We maintain transparent communication throughout the project, ensuring your vision is brought to life with precision and care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-gold/10 hover:border-gold/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gold mb-4">Signature Service</h3>
                    <p className="text-gray-300 leading-relaxed">
                      At Luxtone Coating, we don't just paint walls — we create environments that inspire and elevate. Each project receives our signature touch of luxury, transforming spaces into masterpieces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Expert Artisans' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-black/20 border border-gold/10 hover:border-gold/20 transition-all"
              >
                <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-sm text-gold/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes royalMove1 {
          0% { background-position: 200% 200%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes royalMove2 {
          0% { background-position: 0% 200%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes royalMove3 {
          0% { background-position: 200% 0%; }
          100% { background-position: 0% 200%; }
        }
        @keyframes royalMove4 {
          0% { background-position: 100% 100%; }
          100% { background-position: -100% -100%; }
        }
        @keyframes royalMove5 {
          0% { background-position: -100% 100%; }
          100% { background-position: 100% -100%; }
        }
      `}</style>
    </main>
  );
}
 
