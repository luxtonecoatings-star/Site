import { useState, useEffect } from 'react';
import { Menu, X, Paintbrush } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    // update the URL hash so App's hashchange handler navigates
    try {
      window.location.hash = `#${href}`;
    } catch (e) {
      console.error('Failed to update URL hash:', e);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-black/10 backdrop-blur-sm py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-blue-600' : 'bg-white/90'}`}>
              <Paintbrush className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-blue-600'}`} />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}>
              Luxtone coating
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium bg-white ${
                  link.href === 'home'
                    ? 'text-blue-600'
                    : link.href === 'about'
                    ? 'text-gray-900'
                    : link.href === 'services'
                    ? 'text-red-600'
                    : 'text-orange-600'
                } hover:bg-white/90`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 bg-white rounded-lg shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors bg-white ${
                  link.href === 'home'
                    ? 'text-blue-600'
                    : link.href === 'about'
                    ? 'text-gray-900'
                    : link.href === 'services'
                    ? 'text-red-600'
                    : 'text-orange-600'
                } hover:bg-white/90`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
