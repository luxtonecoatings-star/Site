import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../lib/useInView';

export default function Services() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  useInView(heroRef, { threshold: 0.2, once: true });

  return (
    <main className="bg-brand-dark text-white flex-grow scale-[1] sm:scale-100 origin-top">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-b border-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={heroRef} className="glide-up inline-block">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gold mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gold/80 max-w-3xl mx-auto">
              Six bespoke services crafted with royal attention to detail. Each service below has its own signature presentation — refined, elegant, and cohesive.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {services.map((service, i) => (
          <article key={service.id} className="relative">
            {/* Variant selector by index to give each service a unique layout */}
            {i === 0 && (
              // Variant 1: Classic split — image left, content right with gold frame
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/10">
                  <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
                </div>
                <div>
                  <div className="inline-block px-4 py-1 rounded-lg bg-gold/10 text-gold font-semibold mb-4">Signature</div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.points.slice(0, 6).map((p, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-200">
                        <CheckCircle className="w-5 h-5 text-gold mt-1" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )}

            {i === 1 && (
              // Variant 2: Image right with dark overlay and centered content box
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 lg:pl-12">
                  <h3 className="text-2xl text-gold font-semibold mb-2">Premium Exterior</h3>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.points.slice(0, 4).map((p, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-200">
                        <span className="w-2 h-2 rounded-full bg-gold mt-1" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  {/* Last 4 points: condensed badges */}
                  <div className="mt-6">
                    <h4 className="text-sm text-gold/80 mb-3">More Features</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.points.slice(-4).map((p, idx) => (
                        <div key={idx} className="px-3 py-2 bg-black/25 border border-gold/10 rounded-lg text-sm text-gray-200 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-gold mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/40 backdrop-blur rounded-xl p-4 border border-gold/10">
                        <p className="text-sm text-gold">Weatherproof coatings & long-lasting finish</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {i === 2 && (
              // Variant 3: Full-bleed image with overlay card
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-3xl text-center px-6">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                    <p className="text-gray-200 mb-6">{service.description}</p>
                    <div className="inline-grid grid-cols-2 gap-3 bg-black/30 p-4 rounded-lg border border-gold/10">
                      {service.points.slice(0, 4).map((p, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-200">
                          <CheckCircle className="w-4 h-4 text-gold mt-1" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {i === 3 && (
              // Variant 4: Card list with circular image and accent stripe
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-gold/10 flex gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold/20 shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gold mb-2">{service.title}</h2>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ol className="list-decimal list-inside text-gray-200 space-y-2">
                    {service.points.slice(0, 5).map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {i === 4 && (
              // Variant 5: Split with decorative left panel and image stack on right
              <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                <div className="lg:col-span-1 bg-gradient-to-b from-gold/10 to-transparent p-8 rounded-2xl border border-gold/10">
                  <h3 className="text-sm uppercase text-gold/80 tracking-wider mb-3">Texture & Finish</h3>
                  <h2 className="text-2xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            )}

            {i === 5 && (
              // Variant 6: Parallax-feel hero with points below
              <div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="h-96 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${service.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-8 bg-gradient-to-t from-black/40 backdrop-blur rounded-b-3xl">
                      <h2 className="text-3xl font-heading font-bold text-gold">{service.title}</h2>
                      <p className="text-gray-200">{service.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  {service.points.slice(0, 6).map((p, idx) => (
                    <div key={idx} className="bg-black/25 p-4 rounded-lg border border-gold/10 text-gray-200">
                      <div className="font-semibold text-gold mb-2">{idx + 1}.</div>
                      <div className="text-sm">{p}</div>
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
