import { useState } from 'react';

interface Project {
  before: string;
  after: string;
  title: string;
  description: string;
}

function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      before: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Living Room',
      description: 'Complete transformation with contemporary color palette'
    },
    {
      before: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Elegant Bedroom',
      description: 'Sophisticated finish with premium paint application'
    },
    {
      before: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Exterior Makeover',
      description: 'Weather-resistant coating with stunning curb appeal'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stunning Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the remarkable difference our expert painting services make
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src={projects[activeIndex].before}
                alt="Before"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                BEFORE
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src={projects[activeIndex].after}
                alt="After"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                AFTER
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {projects[activeIndex].title}
            </h3>
            <p className="text-gray-600">{projects[activeIndex].description}</p>
          </div>

          <div className="flex justify-center space-x-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-blue-600 w-12'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
