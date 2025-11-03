// NOTE: I used a placeholder phone number. Replace with your real number in international format (no + or dashes), e.g. '15551234567'
const WHATSAPP_NUMBER = '15551234567';

function WhatsAppButton() {
  const message = `Hi Luxtone coating, I would like to enquire about your services.`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Luxtone coating on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150 group-hover:scale-[1.8] transition-transform duration-700"></div>
      
      {/* Button container with golden gradient */}
      <div className="relative bg-gradient-to-r from-[#DFBA5E] via-[#E7CA7C] to-[#DFBA5E] p-[2px] rounded-full shadow-lg hover:shadow-gold/50 transition-shadow duration-300">
        {/* Inner content with dark background */}
        <div className="bg-gradient-to-br from-black/90 to-black/70 rounded-full p-4 backdrop-blur-sm 
                    flex items-center justify-center w-14 h-14 
                    group-hover:bg-gradient-to-br group-hover:from-transparent group-hover:to-black/20 
                    transition-all duration-300 relative">
          {/* WhatsApp SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
               className="w-6 h-6 fill-gold group-hover:fill-black transition-colors duration-300" 
               aria-hidden>
            <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .04 5.34.04 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.35-1.63c1.75 0.96 3.7 1.48 5.65 1.48 6.6 0 11.98-5.34 11.98-11.95 0-3.2-1.25-6.2-3.46-8.32zM12 21.5c-1.78 0-3.53-.46-5.06-1.33l-.36-.19-3.77.97.98-3.67-.23-.38A9.33 9.33 0 012.7 11.95c0-5.08 4.12-9.2 9.3-9.2 2.48 0 4.81.97 6.57 2.73A9.2 9.2 0 0121.3 11.95c0 5.08-4.12 9.55-9.3 9.55z" />
            <path d="M17.2 14.1c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.1.2-.3.3-.6.1-1.2-.6-2-1.9-2.6-3.5-.2-.6.2-.8.5-1.1.2-.2.3-.5.4-.8.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-1-2.2-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3 0 1.3 1 2.6 1.2 2.8.2.2 1.9 3 4.6 4.1 3 .9 3.3.8 3.8.8.5 0 1.6-.8 1.8-1.5.2-.7.2-1.3.1-1.5-.2-.2-.6-.3-.9-.4z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default WhatsAppButton;
