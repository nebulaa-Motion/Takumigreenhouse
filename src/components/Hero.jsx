import greenhouseHero from '../assets/hero1.png';
import React from 'react';
import hero1 from '../assets/hero1.png';

function useInView(threshold = 0.12) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Hero() 
        {
  const heroRef = useInView(0.05);

  return (
    <React.Fragment>
    <section id="home" className='relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden bg-[#060E0A]'>
      {/* Background Image */}
      <div className="absolute inset-0">
                <img
                  src={hero1}
                  alt="Quality"
                  className="w-full h-full object-cover animate-hero-zoom"
                />
              </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2EB574]/8 via-transparent to-transparent" />

        {/* Decorative glow */}
        <div className="absolute top-1/4 -left-24 w-48 h-48 rounded-full bg-[#2EB574]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-16 w-36 h-36 rounded-full bg-[#F39C12]/8 blur-2xl" />
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col justify-center h-full min-h-[50vh] md:min-h-[65vh]">
       
          <div ref={heroRef.ref}
            className="max-w-2xl transition-all duration-1000"
            style={{
              opacity: heroRef.inView ? 1 : 0,
              transform: heroRef.inView ? 'translateX(0)' : 'translateX(-50px)',
            }}
            >
            {/* Heading - left aligned */}
            <h1 className="mb-4 font-heading font-bold text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              TAKUMI GREENHOUSE
            </h1>

            {/* Subheading */}
            <div className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading leading-tight space-y-0">
              <span className="font-bold text-[#FE7E23]">Grown with Passion Harvested with Excellence.</span>
            </div>


            {/* Description */}
            <p className="mb-4 text-xs md:text-sm text-white/80 leading-relaxed max-w-lg">
              Takumi Greenhouse is a premium greenhouse melon producer dedicated to
              delivering exceptional quality through precision cultivation, modern technology, and sustainable farming practices.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://maps.app.goo.gl/HaqDCGaTDDM96oPP6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FE7E23] hover:bg-[#E67E22] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-md"
              >
                Explore our farm
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-white hover:text-text-dark transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        
      </div>
    </section>
    </React.Fragment>
  );
}
