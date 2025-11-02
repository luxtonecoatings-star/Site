import { GooFilter } from '../components/GooFilter';
import { ParticlesBackground } from '../components/ParticlesBackground';

function About() {
  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      <GooFilter />
      <ParticlesBackground />
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
              About Luxtone coating
            </h1>

            <div className="bg-blue-500 bg-opacity-30 shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Luxtone coating has been transforming spaces and exceeding expectations for over 15 years. Founded on the principles of quality craftsmanship, integrity, and customer satisfaction, we have grown from a small local operation to one of the most trusted painting service providers in the region. Our team of certified professionals brings decades of combined experience, ensuring every project receives the attention to detail it deserves.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                We specialize in both residential and commercial painting services, utilizing only premium-grade materials from industry-leading brands. Our commitment to excellence is reflected in our meticulous preparation processes, precision application techniques, and thorough quality inspections. Whether it's a single room refresh or a complete property transformation, we approach each project with the same level of dedication and professionalism.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                What sets us apart is our unwavering focus on customer experience. From the initial consultation through project completion, we maintain open communication, respect your space, and work efficiently to minimize disruption. Our satisfied clients have consistently rated us five stars, and many have become repeat customers, trusting us with multiple properties over the years. At Luxtone coating, we don't just paint walls — we create environments that inspire and delight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
