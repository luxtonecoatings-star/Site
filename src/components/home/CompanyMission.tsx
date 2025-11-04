import { useRef } from 'react';
import { useInView } from '../../lib/useInView';

function CompanyMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useInView(sectionRef, { threshold: 0.2, once: true });
  useInView(contentRef, { threshold: 0.2, once: true });
  useInView(imageRef, { threshold: 0.2, once: true });

  const keyPoints = [
    {
      title: 'Imported Italian Raw Materials',
      description: 'Sourcing the finest, high-grade materials directly from Italy for authentic texture and richness.'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'State-of-the-art manufacturing facilities leveraging advanced, precision engineering.'
    },
    {
      title: 'Stringent Quality Controls',
      description: 'Rigorous testing and quality control processes guaranteeing flawless performance.'
    },
    {
      title: 'Superior Performance',
      description: 'Exceptional resistance, longevity, and finish that stands the test of time.'
    }
  ];

  const productsPromise = {
    title: "Our Promise",
    description: "At LuxTone Coatings Private Limited, we transform surfaces into expressions of elegance and durability. With a relentless focus on innovation and craftsmanship, we deliver premium coating solutions that combine aesthetic sophistication with rugged performance across architectural, industrial and decorative applications."
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 relative overflow-hidden bg-[#050505]"
      style={{
        background: 'black'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div ref={contentRef} className="glide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-6">
              A New Era of Italian Elegance,<br />
              Crafted in India
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We are a pioneering Indian company bringing the sophistication and durability of authentic Italian coatings to the domestic market. At Luxtone, we blend the rich tradition of Italian craftsmanship with cutting-edge manufacturing technology to create finishes of unparalleled quality.
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-heading font-semibold text-gold mb-4">
                Products & Services
              </h3>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gold/10 mb-8">
                <h4 className="text-xl font-heading font-semibold text-gold mb-3">
                  Our Promise
                </h4>
                <p className="text-white/80">
                  At LuxTone Coatings Private Limited, we transform surfaces into expressions of elegance and durability. With a relentless focus on innovation and craftsmanship, we deliver premium coating solutions that combine aesthetic sophistication with rugged performance across architectural, industrial and decorative applications.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <h4 className="text-xl font-heading font-semibold text-gold mb-3 group-hover:text-gold/90 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-white/80">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div ref={imageRef} className="relative h-full min-h-[1000px] image-center-start">
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: 'url("/o.svg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
              <p className="text-xl font-heading font-semibold text-gold mb-2 group-hover:text-gold/90 transition-colors">
                Luxtone Coatings
              </p>
              <p className="text-white/80">
                Where global quality meets local craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyMission;