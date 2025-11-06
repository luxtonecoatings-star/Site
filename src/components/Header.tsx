import { useState, useEffect } from 'react';
import { Paintbrush, Menu, X, Instagram, Facebook, Phone, Mail } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/luxtonecoatings?igsh=eW8xeTJlaTF2OXBk',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61583284447450',
    },
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
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <img
                src="/luxlogo.svg"
                alt="LuxTone Logo"
                className="w-16 h-16 sm:w-28 sm:h-28 object-contain transition-all"
              />
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-dark/80 border border-gold/20 flex items-center justify-center hover:bg-brand-dark hover:border-gold/40 transition-all"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
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

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-[400px] h-full bg-brand-dark border-l border-gold/20 transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
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
              <h3 className="text-gold/80 text-sm uppercase tracking-wider mb-4">
                Follow Us
              </h3>
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
              <h3 className="text-gold/80 text-sm uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+919063666312"
                  className="flex items-center space-x-3 text-white hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+91 9063666312</span>
                </a>
                <a
                  href="mailto:contact@luxtone.com"
                  className="flex items-center space-x-3 text-white hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  <span>contact@luxtone.com</span>
                </a>

                {/* Google Map */}
                <div className="rounded-xl overflow-hidden border border-gold/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  <iframe
                    src={
                      'https://www.google.com/maps?q=' +
                      encodeURIComponent(
                        'WorkFlo Hitex Bizness Square 4th Floor, Unit No 405-411, Bizness Square, HNO.1-98/3/5/23 TO 27, Jubilee Enclave, SY Nos 66&67, Madhapur, Serlingampally Mandal, RR DIST, Hyderabad, Telangana- 500081'
                      ) + '&output=embed'
                    }
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
