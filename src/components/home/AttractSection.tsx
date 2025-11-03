function AttractSection() {
  return (
  <section className="min-h-screen h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'rgba(199, 188, 89, 0.3)' }}>
      {/* Moving cubes background - fills the screen and sits behind content */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="cubes-bg w-full h-full relative">
          {Array.from({ length: 100 }).map((_, i) => {
            const left = (i % 6) * 16 + Math.floor(i / 6) * 2; // distribute across width
            const top = Math.floor(i / 6) * 22 + (i % 3) * 2; // distribute across height
            const size = 6 + (i % 5) * 1.5; // vw units
            const delay = (i % 30) * 0.18;
            return (
              <div
                key={i}
                className="cube absolute rounded-md"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}vw`,
                  height: `${size}vw`,
                  animationDelay: `${delay}s`,
                  opacity: 0.7 + (i % 4) * 0.03
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative w-full h-full flex items-center justify-center z-10">
          <div className="w-full max-w-4xl h-[70vh] flex items-center justify-center px-4">
          {/* Central container box - images removed so cubes are visible */}
          <div className="backdrop-blur-md rounded-2xl shadow-2xl ring-1 ring-black/10 p-12 max-w-3xl text-center" style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}>
            <blockquote>
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">"A curated vision — bold color and flawless finish at every step."</p>
              <footer className="text-gray-600">— Luxtone Coatings</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Inline CSS for cubes animation - keeps implementation local to this component */}
      <style>{`
        .cubes-bg { overflow: hidden; }
        .cubes-bg .cube {
          background: linear-gradient(135deg, rgba(212,175,55,0.54), rgba(212,175,55,0.36));
          border: 1px solid rgba(212,175,55,0.36);
          box-shadow: 0 22px 50px rgba(212,175,55,0.16);
          transform: translate3d(0,0,0) rotate(0deg);
          animation: cubeShuffle 6s cubic-bezier(.2,.9,.2,.95) infinite alternate;
          will-change: transform, opacity;
        }

        @keyframes cubeShuffle {
          0% { transform: translateY(0) rotate(0deg) translateZ(0); }
          25% { transform: translateY(-10vh) rotate(8deg) translateZ(30px); }
          50% { transform: translateY(4vh) rotate(-6deg) translateZ(50px); }
          75% { transform: translateY(-5vh) rotate(6deg) translateZ(30px); }
          100% { transform: translateY(0) rotate(0deg) translateZ(0); }
        }

        /* Make sure cubes don't show up too sharp on small screens */
        @media (max-width: 640px) {
          .cubes-bg .cube { opacity: 0.36; }
        }
      `}</style>
    </section>
  );
}

export default AttractSection;
