import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../../lib/useInView';

function WhyChooseUs() {
  const sections = [
    {
      title: 'Expert Craftsmanship',
      text: 'Our craftsmen combine decades of experience with attention to detail to deliver immaculate finishes that last.',
      image:
        'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Premium Materials & Colors',
      text: 'We use premium paints and coatings to ensure vibrant, durable color that resists fading and wear.',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Professional Process',
      text: 'Detailed prep, protective measures, and efficient scheduling minimize disruption and speed delivery.',
      image:
        'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      title: 'Service & Warranty',
      text: 'We stand behind our work with responsive customer care and solid warranty options to protect your investment.',
      image:
        'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  return (
    <main className="flex-grow scale-[1] sm:scale-100 origin-top">
      {sections.map((s, i) => {
        // use refs per-section via closures (safe since refs are stable within each render)
        const imgRef = useRef<HTMLDivElement | null>(null);
        const textRef = useRef<HTMLDivElement | null>(null);

        useInView(textRef, { threshold: 0.18, once: true });
        useInView(imgRef, { threshold: 0.2, once: true });

        return (
          <section key={i} className="h-screen w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Conditionally render image first or text first */}
              {i % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <div
                    ref={imgRef}
                    className="h-full w-full bg-cover bg-center slide-right"
                    style={{ backgroundImage: `url(${s.image})` }}
                    aria-hidden="true"
                  />
                  {/* Text Right */}
                  <div className="h-full flex items-center bg-white px-6 md:px-12 lg:px-20">
                    <div ref={textRef} className="max-w-2xl glide-up">
                      <span className="text-gold font-semibold uppercase tracking-wide mb-2 block">Why Luxtone</span>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">{s.title}</h2>
                      <p className="text-gray-600 mb-6 font-body leading-relaxed">{s.text}</p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-gold hover:bg-[#b8902a] text-brand-dark px-5 py-3 rounded-lg font-semibold shadow transition-transform transform hover:-translate-y-0.5"
                      >
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Left */}
                  <div className="h-full flex items-center bg-white px-6 md:px-12 lg:px-20">
                    <div ref={textRef} className="max-w-2xl glide-up">
                      <span className="text-gold font-semibold uppercase tracking-wide mb-2 block">Why Luxtone</span>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">{s.title}</h2>
                      <p className="text-gray-600 mb-6 font-body leading-relaxed">{s.text}</p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-gold hover:bg-[#b8902a] text-brand-dark px-5 py-3 rounded-lg font-semibold shadow transition-transform transform hover:-translate-y-0.5"
                      >
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  {/* Image Right */}
                  <div
                    ref={imgRef}
                    className="h-full w-full bg-cover bg-center slide-left"
                    style={{ backgroundImage: `url(${s.image})` }}
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default WhyChooseUs;
