import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../lib/useInView';

export default function Services() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const refs = Array.from({ length: 6 }, () => useRef<HTMLDivElement>(null));
  
  useInView(heroRef, { threshold: 0.2, once: true });
  refs.forEach(ref => useInView(ref, { threshold: 0.2, once: true }));

  // Inline service data override for clarity and independence
  const serviceList = [
    {
      id: 1,
      title: 'Architectural & Decorative Coatings',
      description:
        'Luxurious interior and exterior finishes engineered for beauty, performance, and longevity — from boutique retail spaces to architectural façades.',
      image:
        'https://images.pexels.com/photos/4792493/pexels-photo-4792493.jpeg?auto=compress&cs=tinysrgb&w=1600',
      points: [
        'Luxurious interior wall finishes designed to elevate residential and commercial spaces — from lounges and lobbies to boutique retail and hospitality interiors.',
        'Customised decorative textures and finishes — metallic sheens, suede-effect, mineral-rich surfaces, high-gloss accent walls — tailored to your vision and environment.',
        'Exterior architectural coatings engineered for style and endurance: high-performance weather resistance, UV-stable colours, and low-maintenance surfaces.',
        'Full-service design consultation and application support: our skilled team works with your architects and interior designers from concept through execution to ensure perfection.'
      ]
    },
    // ... rest of the serviceList data ...
  ];

  return (
    <main className="bg-brand-dark text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")',
            transform: 'scale(1.5)'
          }} 
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div ref={heroRef} className="glide-up max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gold mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gold/80 leading-relaxed">
              Six bespoke services crafted with royal attention to detail. Each service below has its own signature presentation — refined, elegant, and cohesive.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24 sm:space-y-32">
        {serviceList.map((service, i) => (
          <article key={service.id} ref={refs[i]} className="max-w-6xl mx-auto glide-up">
            {i === 0 && (
              // Variant 1: Hero Service with Full-width Image
              <div className="relative min-h-[500px] sm:min-h-[600px] rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
                <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl p-6 sm:p-12">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-6">{service.title}</h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-white/80 group/item">
                        <CheckCircle className="w-6 h-6 text-gold mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {i === 1 && (
              // Variant 2: Split View with Image Right
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-6">{service.title}</h2>
                  <p className="text-lg text-white/90 mb-8">{service.description}</p>
                  <ul className="space-y-6">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <CheckCircle className="w-6 h-6 text-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-white/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden group">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
              </div>
            )}

            {i === 2 && (
              // Variant 3: Grid Layout with Centered Image
              <div className="space-y-12">
                <div className="aspect-[2/1] rounded-2xl overflow-hidden group">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-6">{service.title}</h2>
                  <p className="text-lg text-white/90 mb-12">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur p-6 rounded-xl border border-gold/10 group hover:border-gold/30 transition-colors">
                        <CheckCircle className="w-8 h-8 text-gold mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <p className="text-white/80">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {i === 3 && (
              // Variant 4: Alternating Content Blocks
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-6">{service.title}</h2>
                  <p className="text-lg text-white/90">{service.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {service.points.map((point, idx) => (
                    <div key={idx} className={`flex gap-6 items-start ${idx % 2 === 0 ? 'md:translate-y-12' : ''}`}>
                      <CheckCircle className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                      <div className="space-y-4">
                        <div 
                          className="aspect-[3/2] rounded-xl overflow-hidden"
                          style={{ 
                            backgroundImage: `url(${service.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <p className="text-white/80">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {i === 4 && (
              // Variant 5: Feature Cards with Sidebar
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-gradient-to-b from-gold/10 to-transparent p-8 rounded-2xl border border-gold/10">
                  <h3 className="text-sm uppercase text-gold/80 tracking-wider mb-3">Exclusive Features</h3>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="group bg-black/25 backdrop-blur p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-colors">
                      <CheckCircle className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                      <p className="text-white/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {i === 5 && (
              // Variant 6: Masonry Layout
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gold mb-6">{service.title}</h2>
                  <p className="text-lg text-white/90">{service.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.points.map((point, idx) => (
                    <div 
                      key={idx} 
                      className={`group p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 ${
                        idx === 0 ? 'lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-gold/20 to-transparent' : 
                        'bg-white/5 backdrop-blur'
                      }`}
                    >
                      <CheckCircle className="w-6 h-6 text-gold mb-4 group-hover:scale-110 transition-transform" />
                      <p className={`text-white/80 ${idx === 0 ? 'text-lg' : 'text-base'}`}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}