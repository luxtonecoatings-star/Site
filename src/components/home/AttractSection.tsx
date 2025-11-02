import { Sparkles, TrendingUp, Heart } from 'lucide-react';

function AttractSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Color expertise"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <Sparkles className="w-10 h-10 text-yellow-400 mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">Color Mastery</h3>
              <p className="text-gray-200">
                Our color experts help you choose the perfect palette that reflects your personality and enhances your space's ambiance.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Quality results"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <TrendingUp className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">Value Addition</h3>
              <p className="text-gray-200">
                Professional painting significantly increases your property value while creating spaces you'll love coming home to every day.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Customer satisfaction"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <Heart className="w-10 h-10 text-red-400 mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">Customer Love</h3>
              <p className="text-gray-200">
                With thousands of satisfied clients and 5-star reviews, we've built our reputation on trust, quality, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttractSection;
