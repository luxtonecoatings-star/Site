import { CheckCircle } from 'lucide-react';

function PaintsTechniques() {
  const paints = [
    { name: 'Asian Paints Royale', feature: 'Premium luxury finish' },
    { name: 'Berger WeatherCoat', feature: 'All-weather protection' },
    { name: 'Dulux Weathershield', feature: 'Long-lasting durability' },
    { name: 'Nippon Paint', feature: 'Eco-friendly formulas' }
  ];

  const techniques = [
    { name: 'Spray Painting', benefit: 'Smooth, uniform coverage' },
    { name: 'Brush & Roll', benefit: 'Traditional precision' },
    { name: 'Texture Application', benefit: 'Dimensional effects' },
    { name: 'Stenciling', benefit: 'Custom patterns' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Paints & Expert Techniques
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We partner with industry-leading brands and employ cutting-edge techniques to deliver exceptional results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-500 mr-4 rounded"></span>
              Premium Paint Brands
            </h3>
            <div className="space-y-4">
              {paints.map((paint, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">{paint.name}</div>
                    <div className="text-gray-300">{paint.feature}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-green-500 mr-4 rounded"></span>
              Advanced Techniques
            </h3>
            <div className="space-y-4">
              {techniques.map((technique, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">{technique.name}</div>
                    <div className="text-gray-300">{technique.benefit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaintsTechniques;
