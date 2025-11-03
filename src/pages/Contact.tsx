import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    try {
      if (supabase) {
        const { error } = await supabase.from('contact_submissions').insert([formData]);
        if (error) throw error;
      }

      setSubmitMessage('Thank you! We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
      setSubmitMessage('Sorry, there was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex-grow scale-[1] sm:scale-100 origin-top">
    <div className="pt-20 bg-black min-h-screen font-[Royal_Acid]">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-b border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gold">
            Contact Us
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <p className="text-xl text-gold/80 max-w-3xl mx-auto mt-6 font-light">
            Experience the royal treatment — Let’s discuss your vision and transform your space.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Contact Info */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-gold mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                  <div className="bg-black/60 p-4 rounded-lg border border-gold/20">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-gold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                  <div className="bg-black/60 p-4 rounded-lg border border-gold/20">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-gold mb-1">Email</h3>
                    <p className="text-gray-300">info@luxtone.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                  <div className="bg-black/60 p-4 rounded-lg border border-gold/20">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-gold mb-1">Address</h3>
                    <p className="text-gray-300">
                      123 Paint Street, Color District<br />New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Business Hours — themed card */}
                <div className="flex items-start space-x-4 bg-gradient-to-br from-gold/10 via-gold/20 to-transparent p-6 rounded-xl border border-gold/30 shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-all">
                  <div className="bg-gold/20 p-4 rounded-lg border border-gold/30">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-gold mb-1">Business Hours</h3>
                    <p className="text-gold/90 leading-relaxed">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gold/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Form — themed */}
            <div className="bg-gradient-to-br from-black via-black to-gold/10 border border-gold/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-md">
              <h2 className="text-3xl font-heading font-bold text-gold mb-6">Send Us a Message</h2>

              {submitMessage && (
                <div
                  className={`mb-6 px-4 py-3 rounded-lg text-center ${
                    isError
                      ? 'bg-red-900/20 border border-red-500/40 text-red-300'
                      : 'bg-green-900/20 border border-green-500/40 text-green-300'
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-semibold text-gold/90 mb-2"
                    >
                      {field === 'name'
                        ? 'Full Name *'
                        : field === 'email'
                        ? 'Email Address *'
                        : 'Phone Number *'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      id={field}
                      name={field}
                      required
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-lg text-white placeholder-gray-400
                      focus:ring-2 focus:ring-gold focus:border-gold/50 transition-all duration-200"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gold/90 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-lg text-white
                    focus:ring-2 focus:ring-gold focus:border-gold/50 transition-all duration-200"
                  >
                    <option value="" className="bg-black">
                      Select a service
                    </option>
                    <option value="interior" className="bg-black">Interior Painting</option>
                    <option value="exterior" className="bg-black">Exterior Painting</option>
                    <option value="commercial" className="bg-black">Commercial Painting</option>
                    <option value="wallpaper" className="bg-black">Wallpaper Installation</option>
                    <option value="texture" className="bg-black">Texture Coating</option>
                    <option value="wood" className="bg-black">Wood Finishing</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gold/90 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-lg text-white placeholder-gray-400
                    focus:ring-2 focus:ring-gold focus:border-gold/50 transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden bg-gold text-black font-bold py-4 rounded-lg
                  transition-all duration-300 hover:bg-gold/90 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
  );
}

export default Contact;
