import { Paintbrush, Home, Building, Wallpaper } from 'lucide-react';

function ServicesPreview() {
  const services = [
    {
      icon: Home,
      title: 'Interior Painting',
      description: 'Transform your indoor spaces with vibrant colors and flawless finishes'
    },
    {
      icon: Building,
      title: 'Exterior Painting',
      description: 'Weather-resistant coatings that protect and beautify your property'
    },
    {
      icon: Paintbrush,
      title: 'Commercial Services',
      description: 'Professional solutions for offices and commercial spaces'
    },
    {
      icon: Wallpaper,
      title: 'Specialty Finishes',
      description: 'Unique textures and decorative techniques for distinctive looks'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive painting solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
