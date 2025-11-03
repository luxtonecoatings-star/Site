import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Royal Elegance',
    subtitle: 'Where luxury meets craftsmanship in every brushstroke',
    accent: 'Elevate Your Space'
  },
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Masterful Artistry',
    subtitle: 'Premium finishes that define prestigious spaces',
    accent: 'Timeless Beauty'
  },
  {
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Luxurious Vision',
    subtitle: 'Creating distinguished environments with unparalleled quality',
    accent: 'Exquisite Detail'
  }
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-30" />
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.03]" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl relative">
                {/* Accent text */}
                <div className="mb-4">
                  <span className="inline-block bg-gold/10 backdrop-blur-sm text-gold px-4 py-1 rounded-full text-sm font-medium border border-gold/20">
                    {slide.accent}
                  </span>
                </div>

                {/* Main title with decorative elements */}
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white relative z-10">
                    {slide.title}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-gold via-gold to-transparent opacity-80" />
                  </h1>
                  {/* Decorative line */}
                  <div className="h-px w-32 bg-gradient-to-r from-gold via-gold to-transparent mb-6" />
                </div>

                {/* Subtitle with premium styling */}
                <p className="text-xl md:text-2xl mb-8 text-gray-200 font-body max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Premium styled button */}
                <button className="relative group overflow-hidden bg-gradient-to-r from-[#DFBA5E] via-[#E7CA7C] to-[#DFBA5E] 
                                text-black px-8 py-4 rounded-lg font-heading text-lg font-bold
                                transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative">Request a Royal Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-gold/20 
                text-gold p-4 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:text-gold/80" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-gold/20 
                text-gold p-4 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:text-gold/80" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-gold/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-1 bg-gradient-to-r from-gold via-gold to-gold/50' 
                : 'w-3 h-1 bg-gold/30 hover:bg-gold/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
