import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

function ServicesPreview() {
  const steps = [
    {
      title: 'Browse our portfolio',
      desc: 'Explore finished projects and color ideas to find the right style for your space.',
      img: '/s1.jpeg'
    },
    {
      title: 'Request a tailored quote',
      desc: 'Send a few details and we’ll propose a transparent, no-surprise estimate.',
      img: '/s2.jpeg'
    },
    {
      title: 'Schedule with confidence',
      desc: 'We work around your schedule and protect your home while we work.',
      img: '/s3.jpeg'
    },
    {
      title: 'Enjoy the finish',
      desc: 'Final walkthrough, warranty overview, and follow-up care to keep your space looking great.',
      img: '/s4.jpeg'
    }
  ];
  // refs for text blocks so we can animate them when they enter viewport
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const els = textRefs.current.filter(Boolean) as Element[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.18 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full">
      {steps.map((s, i) => {
        const isLeft = i % 2 === 0;
        return (
          <section key={i} className="h-screen w-full relative flex items-center">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.img})` }}
              aria-hidden="true"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Decorative light gradient */}
            <div className={`absolute inset-0 pointer-events-none ${isLeft ? 'bg-gradient-to-r from-black/40 to-transparent' : 'bg-gradient-to-l from-black/40 to-transparent'}`} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
              <div
                ref={(el) => (textRefs.current[i] = el)}
                className="glide-up"
              >
              <div className={`max-w-3xl ${isLeft ? 'ml-0 md:ml-0 lg:ml-0' : 'ml-auto md:ml-auto lg:ml-auto'} `}>
                <div className={`text-white ${isLeft ? 'text-left' : 'text-right'}`}>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6">{s.title}</div>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">{s.desc}</p>
                  <div className={`${isLeft ? 'flex gap-6 justify-start' : 'flex gap-6 justify-end'}`}>
                    <a href="#contact" className="inline-flex items-center gap-3 bg-gold hover:bg-[#b8902a] text-brand-dark px-6 py-3 rounded-lg font-semibold shadow-lg">
                      Get a free quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        );
      })}
    </div>
  );
}

export default ServicesPreview;
