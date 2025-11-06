import { Paintbrush } from 'lucide-react';

function Footer() {
  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div>
            <img 
                  src="/luxlogo.svg" 
                  alt="logo" 
                  width="150" 
                  height="150"
                />
          </div>
        </div>

        <p className="text-gray-400 mb-6">
          Transforming spaces with precision, quality, and passion for over 15 years.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Luxtone Coatings. All rights reserved. Made with <a href="https://staffarc.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">staffarc</a>.</div>
      </div>
    </footer>
  );
}

export default Footer;
