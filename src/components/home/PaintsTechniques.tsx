import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../../lib/useInView';
import ShufflingCubes from './ShufflingCubes';

function PaintsTechniques() {
  const techniques = [
    {
      name: 'Spray Painting',
      description: 'Our advanced spray painting technique delivers flawless, uniform coverage across large surfaces. Using HVLP systems, we ensure minimal overspray and maximum efficiency.',
      benefits: ['Even coverage', 'Faster application', 'Professional finish', 'No brush marks']
    },
    {
      name: 'Textured Finishes',
      description: 'Add depth and character to your walls with our textured finish techniques. From subtle sand-swirl patterns to bold dimensional effects, we create unique surfaces that catch light.',
      benefits: ['Unique patterns', 'Hides imperfections', 'Tactile surfaces', 'Custom designs']
    },
    {
      name: 'Faux Finishing',
      description: 'Transform ordinary surfaces into extraordinary works of art with our faux finishing expertise. We recreate the look of marble, wood, or metallic surfaces using specialized tools.',
      benefits: ['Luxury aesthetics', 'Cost-effective', 'Unique look', 'Durable finish']
    },
    {
      name: 'Specialty Coatings',
      description: 'Our specialty coating services include epoxy floors, metallic finishes, and protective sealants. These advanced applications provide both aesthetic appeal and functional benefits.',
      benefits: ['High durability', 'Custom effects', 'Weather resistant', 'Easy maintenance']
    }
  ];

  const titleRef = useRef<HTMLDivElement>(null);
  const sectionRefs = techniques.map(() => useRef<HTMLDivElement>(null));

  // Initialize refs for animation
  useInView(titleRef, { threshold: 0.3, once: true, rootMargin: "-50px" });
  sectionRefs.forEach(ref => useInView(ref, { threshold: 0.1, once: true, rootMargin: "-100px" }));

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <ShufflingCubes />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div ref={titleRef} className="text-center mb-24 glide-up">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white">
            Expert Painting Techniques
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
            Discover our specialized painting methods that transform spaces with precision and artistry
          </p>
        </div>

        <div className="space-y-20">
          {techniques.map((technique, index) => (
            <div
              key={index}
              ref={sectionRefs[index]}
              className={`flex flex-col items-center ${index % 2 === 0 ? 'slide-left' : 'slide-right'} ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Number indicator */}
              <div className="w-24 h-24 mb-8 md:mb-0 flex-shrink-0">
                <div className="w-full h-full rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-gold">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-grow ${index % 2 === 1 ? 'md:mr-16' : 'md:ml-16'}`}>
                <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center md:text-left">
                  {technique.name}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-center md:text-left max-w-2xl">
                  {technique.description}
                </p>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {technique.benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaintsTechniques;
