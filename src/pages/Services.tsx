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
        '/sp1.jpg',
      points: [
        'Luxurious interior wall finishes designed to elevate residential and commercial spaces — from lounges and lobbies to boutique retail and hospitality interiors.',
        'Customised decorative textures and finishes — metallic sheens, suede-effect, mineral-rich surfaces, high-gloss accent walls — tailored to your vision and environment.',
        'Exterior architectural coatings engineered for style and endurance: high-performance weather resistance, UV-stable colours, and low-maintenance surfaces.',
        'Full-service design consultation and application support: our skilled team works with your architects and interior designers from concept through execution to ensure perfection.'
      ]
    },
    {
      id: 2,
      title: 'Protective & Industrial Coatings',
      description:
        'Industrial-grade surface protection solutions for structural, mechanical, and infrastructure assets exposed to harsh operational environments.',
      image:
        '/sp2.jpg',
      points: [
        'Industrial-grade protection for structural steel, heavy machinery, plant equipment and infrastructure: corrosion-resistant, wear-resistant, and chemical-resistant systems.',
        'Specialty coatings for demanding environments — high-temperature units, chemical processing plants, marine and offshore structures.',
        'Tailored solutions combining advanced chemistries (epoxy, polyurethane, fluoropolymers, etc.) and modern application techniques for longer service life and lower lifecycle cost.',
        'On-site and off-site application services: from blast-cleaning and priming through coating and quality verification.'
      ]
    },
    {
      id: 3,
      title: 'Custom Colour & Finishing Solutions',
      description:
        'Bespoke colour development and finishing expertise for designers, architects, and OEM clients seeking unique, high-quality surfaces.',
      image:
        'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=1600',
      points: [
        'Bespoke colour matching, effect finishes, and artisan textures to meet the precise aesthetic requirements of design professionals.',
        'In-house R&D and sample-studio facility for rapid prototyping, colour validation, and finish verification.',
        'Eco-conscious formulations featuring low-VOC, solvent-reduced, and water-based technologies that align with sustainability goals.',
        'Collaborative development approach — from idea to approved sample — ensuring every detail reflects your creative intent.'
      ]
    },
    {
      id: 4,
      title: 'Turnkey Project Services',
      description:
        'Comprehensive project execution — from design specification to final inspection — for coating applications across residential, commercial, and industrial sectors.',
      image:
        'https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg?auto=compress&cs=tinysrgb&w=1600',
      points: [
        'End-to-end project management for large-scale coating projects: specification, budgeting, surface assessment, and supervision through to hand-over.',
        'Expert application teams deployed across towers, resorts, complexes, and industrial plants — ensuring quality and schedule compliance.',
        'Maintenance and refurbishment services: periodic inspections, recoating, and surface revitalisation to extend asset life.',
        'Transparent coordination and reporting to ensure peace of mind for clients and consultants.'
      ]
    },
    {
      id: 5,
      title: 'Technical Support & After-Sales Care',
      description:
        'Comprehensive technical assistance and long-term service programs to ensure coatings continue performing beautifully for years to come.',
      image:
        'https://images.pexels.com/photos/7319312/pexels-photo-7319312.jpeg?auto=compress&cs=tinysrgb&w=1600',
      points: [
        'Full technical support: specification guidance, system design, and application recommendations.',
        'Quality assurance and inspection services — including on-site monitoring, lab testing, and performance verification.',
        'Customer and partner training programs covering surface preparation, coating techniques, and maintenance best practices.',
        'Lifetime service support — helping clients manage performance, appearance, and lifecycle cost through proactive maintenance.'
      ]
    }
  ];

  return (
    <main className="bg-brand-dark text-white flex-grow scale-[1] sm:scale-100 origin-top">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-b border-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={heroRef} className="glide-up inline-block">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gold mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gold/80 max-w-3xl mx-auto">
              Five core service divisions designed to deliver excellence across every surface — from luxurious interiors to extreme-duty industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {serviceList.map((service, i) => (
          <article key={service.id} className="relative">
            {/* Variant logic preserved */}
            {i === 0 && (
              // Variant 1: Image left, content right
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/10">
                  <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
                </div>
                <div>
                  <div className="inline-block px-4 py-1 rounded-lg bg-gold/10 text-gold font-semibold mb-4">Signature</div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.points.map((p, idx) => (
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
              // Variant 2: Image right with overlay
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 lg:pl-12">
                  <h3 className="text-2xl text-gold font-semibold mb-2">Industrial Excellence</h3>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.points.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-200">
                        <span className="w-2 h-2 rounded-full bg-gold mt-1" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            )}

            {i === 2 && (
              // Variant 3: Centered content (no background image or overlay)
              <div className="bg-black/20 rounded-2xl p-8 sm:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                  <p className="text-gray-200 mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    {service.points.map((p, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-200">
                        <CheckCircle className="w-5 h-5 text-gold mt-1" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {i === 3 && (
              // Variant 4: Large image on top, content below
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full h-64 sm:h-80 md:h-96 object-cover" />
                </div>
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gold/10">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gold mb-3">{service.title}</h2>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ol className="list-decimal list-inside text-gray-200 space-y-2">
                    {service.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {i === 4 && (
              // Variant 5: Decorative left panel with image
              <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                <div className="lg:col-span-1 bg-gradient-to-b from-gold/10 to-transparent p-8 rounded-2xl border border-gold/10">
                  <h3 className="text-sm uppercase text-gold/80 tracking-wider mb-3">Support & Care</h3>
                  <h2 className="text-2xl font-heading font-bold text-gold mb-4">{service.title}</h2>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  {service.points.map((p, idx) => (
                    <div key={idx} className="bg-black/25 p-4 rounded-lg border border-gold/10 text-gray-200 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5" />
                      <span>{p}</span>
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
