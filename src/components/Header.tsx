import { useState, useEffect } from 'react';
import { Paintbrush, Menu, X, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a larger threshold for better mobile detection
      const scrollThreshold = window.innerWidth < 640 ? 10 : 20;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    
    // Initial check
    handleScroll();
    
    // Add listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll, { passive: true }); // Add touch event listener
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/luxtonecoatings' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/luxtonecoatings' },
  ];

  const handleNavClick = (href: string) => {
    try {
      window.location.hash = `#${href}`;
      setIsMenuOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/70 backdrop-blur-md shadow-md py-4 sm:py-6' : 'bg-transparent py-6 sm:py-12'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="rounded-lg bg-[#2B1B12] flex items-center justify-center p-3">
                <Paintbrush className="w-8 h-8 text-gold" />
              </div>
              <span className="text-3xl font-heading text-gold tracking-wide">Luxtone Coatings</span>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 rounded-full bg-brand-dark/80 border border-gold/20 flex items-center justify-center hover:bg-brand-dark hover:border-gold/40 transition-all"
            >
              <Menu className="w-6 h-6 text-gold" />
            </button>
          </div>
        </nav>
      </header>

      {/* Sliding Menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop blur */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-[400px] h-full bg-brand-dark border-l border-gold/20 transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-brand-dark border border-gold/20 flex items-center justify-center hover:border-gold/40 transition-all"
          >
            <X className="w-5 h-5 text-gold" />
          </button>

          <div className="h-full py-20 px-8 overflow-y-auto">
            {/* Navigation Links */}
            <nav className="mb-12">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-4 text-xl font-heading text-white hover:text-gold transition-colors"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-gold/80 text-sm uppercase tracking-wider mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black/20 border border-gold/20 flex items-center justify-center hover:border-gold/40 transition-all"
                  >
                    <link.icon className="w-5 h-5 text-gold" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gold/80 text-sm uppercase tracking-wider mb-4">Contact Us</h3>
              <div className="space-y-4">
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 text-white hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a
                  href="mailto:contact@luxtone.com"
                  className="flex items-center space-x-3 text-white hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@luxtone.com</span>
                </a>
                <div className="flex items-start space-x-3 text-white">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>123 Luxury Avenue<br />Suite 456<br />New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

