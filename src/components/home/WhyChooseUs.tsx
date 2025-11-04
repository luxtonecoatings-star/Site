import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../../lib/useInView';

function WhyChooseUs() {
  const sections = [
    {
      title: 'Premium Materials & Craftsmanship',
      text: 'We source the finest raw materials and apply strict process controls to ensure every finish delivers on durability and visual excellence.',
      image:
        '/ww.jpeg'
    },
    {
      title: 'Innovative Solutions',
      text: 'Whether it’s a bespoke finish for a luxury boutique or an extreme-duty lining for an industrial plant, our R&D-driven approach ensures we stay ahead of evolving needs.',
      image:
        '/w1.jpeg',
  // optional background class applied only to this section
  bg: 'black',
        
    },
    {
      title: 'End-to-End Delivery',
      text: 'From concept and sampling to full-scale application and after-care, we deliver seamless service so you can focus on your core business while we handle every detail.',
      image:
        'w2.jpeg'
    },
    {
      title: 'Sustainability Focus',
      text: 'Our formulations and practices reflect a commitment to environmentally responsible coatings and healthier interior spaces.',
      image:
        '/w4.jpeg'
    }
  ];

  return (
    <main className="flex-grow scale-[1] sm:scale-100 origin-top">
      {sections.map((s, i) => {
        const imgRef = useRef<HTMLDivElement | null>(null);
        const textRef = useRef<HTMLDivElement | null>(null);

        useInView(textRef, { threshold: 0.18, once: true });
        useInView(imgRef, { threshold: 0.2, once: true });

        return (
          <section key={i} className={`h-screen w-full ${s.bg ?? ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
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
                  <div className={`h-full flex items-center ${s.bg ?? 'bg-gold/20'} px-6 md:px-12 lg:px-20`}>
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
                  <div className={`h-full flex items-center ${s.bg ?? 'bg-white'} px-6 md:px-12 lg:px-20`}>
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
