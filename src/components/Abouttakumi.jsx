import { Home, Award, Sprout, Handshake } from 'lucide-react';
import React from 'react';
import greenhouse1 from '../assets/greenhouse1.jpg';
import greenhouse2 from '../assets/greenhouse2.jpg';
import greenhouse3 from '../assets/greenhouse3.jpg';
import img1 from '../assets/img1.jpg';
import TakumiTeam from '../assets/takumiteam.jpg';
import greenWave from '../assets/about-green-wave.png';
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

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const handleChange = (e) => setIsMobile(e.matches);

    setIsMobile(media.matches);

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  return isMobile;
}

export default function Abouttakumi() {
  const heroRef = useInView(0.05);
  const isMobile = useIsMobile();
  return (
    <React.Fragment>
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[1000px] md:min-h-[1000px]"
      style={{ backgroundImage: `url(${greenWave})` }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-6">
          {/* Left: About text + Why Choose Takumi */}
          <div className="space-y-8 md:space-y-10">
            {/* About text */}
            <div className="space-y-5 md:space-y-6">
              {/* Orange ABOUT label */}
              <div className="flex items-center gap-2">
                <div className="h-1 w-10 bg-[#F39C12] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#F39C12]">ABOUT US</span>
              </div>
              <div
                ref={heroRef.ref}
                className={isMobile ? "" : "transition-all duration-800"}
                style={{
                  opacity: isMobile ? 1 : heroRef.inView ? 1 : 0,
                  transform: isMobile
                  ? "none"
                  : heroRef.inView
                  ? "translateX(0)"
                  : "translateX(-50px)",
                }}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-white">
                About <span className="text-[#F39C12]">Takumi</span> Greenhouse
              </h2>

              <p className="text-sm md:text-base leading-relaxed max-w-xl text-white">
                Takumi Greenhouse is committed to producing premium quality melons with consistency, freshness, and exceptional taste by integrating greenhouse technology with precision cultivation. We strive to deliver the best products for our customers while promoting sustainable agriculture.
              </p>

              {/* Orange CTA Button */}
              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 bg-[#FE7E23] hover:bg-[#E67E22] text-white font-semibold text-sm px-6 py-2.5 rounded-md transition-colors shadow-md"
              >
                Learn more...
              </a>
            </div>
            </div>
            {/* Why Choose Takumi - 4 icons */}
            <div>
              <div
                ref={heroRef.ref}
                className={isMobile ? "" : "transition-all duration-1000"}
                style={{
                  opacity: isMobile ? 1 : heroRef.inView ? 1 : 0,
                  transform: isMobile
                  ? "none"
                  : heroRef.inView
                  ? "translateX(0)"
                  : "translateX(-50px)",
                }}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 text-white">
                Why choose <span className="text-[#F39C12]">Takumi</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 gap-5 md:gap-6 ">
                {[
                  {
                    icon: Home,
                    title: "Precision\nAgriculture",
                    subtitle: "Modern greenhouse cultivation supported by data-driven farming.",
                    },
                  {
                    icon: Award,
                    title: "Premium \nQuality",
                    subtitle: "Carefully cultivated melons with consistent quality.",
                    },
                  {
                    icon: Sprout,
                    title: "Sustainable \nFarming",
                    subtitle: "Efficient water and nutrient management.",
                    },
                  {
                    icon: Handshake,
                    title: "Reliable \nPartnership",
                    subtitle: "Reliable supply and long-term business partnership.",
                  },
                ].map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="flex flex-col group"
                  >
                  {/* Baris pertama */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/30 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/40">
                      <Icon size={26} className="text-white" />
                    </div>

                    <h4 className="font-semibold text-sm text-white whitespace-pre-line">
                    {title}
                    </h4>
                  </div>

                  {/* Baris kedua */}
                  <p className="mt-2 text-xs md:text-sm text-white/70 w-40">
                    {subtitle}
                  </p>
                </div>
                ))}
              </div>
            </div>
          </div>
          </div>
          {/* Right: 2x2 Image Grid - Desktop */}
          <div
          ref={heroRef.ref}
            className={isMobile ? "" : "transition-all duration-700"}
            style={{
                  opacity: isMobile ? 1 : heroRef.inView ? 1 : 0,
                  transform: isMobile
                  ? "none"
                  : heroRef.inView
                  ? "translateX(0)"
                  : "translateX(-50px)",
                }}>
          <div className="hidden lg:grid grid-cols-2 gap-4 w-full max-w-md mx-auto" style={{ aspectRatio: '1' }}>
            
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100">
              <img src={TakumiTeam} alt="Seedlings" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100">
              <img src={greenhouse2} alt="Farm" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100">
              <img src={greenhouse1} alt="Melon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100">
              <img src={img1} alt="Sliced melon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Right: Mobile image cards */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mx-auto w-full max-w-sm">
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-square">
              <img src={TakumiTeam} alt="Seedlings" className="w-full h-full object-cover hover:scale-105 transition-transform " />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-square">
              <img src={greenhouse2} alt="Farm" className="w-full h-full object-cover hover:scale-105 transition-transform " />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-square">
              <img src={greenhouse1} alt="Melon" className="w-full h-full object-cover hover:scale-105 transition-transform " />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-square">
              <img src={img1} alt="Sliced melon" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
}
