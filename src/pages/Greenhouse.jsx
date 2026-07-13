import React from 'react';
import greenhouse1 from '../assets/greenhouse1.jpg';
import greenhouse5 from '../assets/greenhouse5.jpg';
import greenhouseHero from '../assets/hero1.png';

import fert1 from '../assets/fertigation1.jpg';
import fert2 from '../assets/fertigation2.jpg';
import fert3 from '../assets/fertigation3.jpg';
import fert4 from '../assets/fertigation4.jpg';

import climat1 from '../assets/cc1.jpg';
import climat2 from '../assets/cc2.jpg';
import climat3 from '../assets/cc3.jpg';
import climat4 from '../assets/cc4.jpg';

import sust1 from '../assets/Sustainable1.jpg';
import sust2 from '../assets/greenhouse2.jpg';
import sust3 from '../assets/Sustainable2.jpg';

import processSeedSelection from '../assets/seed.jpg';
import processNursery from '../assets/nursery.jpg';
import processTransplanting from '../assets/transplanting.jpg';
import processVegetativeGrowth from '../assets/growth.jpg';
import processPollination from '../assets/pollination.jpg';
import processFruitDevelopment from '../assets/fruit.jpg';
import processHarvest from '../assets/harvest.jpg';
import processGrading from '../assets/grading.jpg';
import processPacking from '../assets/packing.png';
import processDistribution from '../assets/distribution.jpg';

/* ================================================================== */
/*  Intersection Observer — reusable                                   */
/* ================================================================== */

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

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

const features = [
  {
    title: 'Greenhouse Technology',
    desc: 'Controlled-environment cultivation allows us to maintain consistent plant growth and fruit quality throughout the production cycle.',
    icon: (
      <svg className="text-white w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" />
      </svg>
    ),
    images: [greenhouse1, greenhouse5],
    bgGrad: 'linear-gradient(135deg, #5CD6A7 0%, #3DAF88 100%)',
  },
  {
    title: 'Precision Fertigation',
    desc: 'Each plant receives carefully controlled water and nutrients based on its growth stage to maximize fruit quality and resource efficiency.',
    icon: (
      <svg className="text-white w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z" /><path d="M12 14a3 3 0 0 0 3-3" />
      </svg>
    ),
    images: [fert1, fert2, fert3, fert4],
    bgGrad: 'linear-gradient(135deg, #4CC5A0 0%, #2E9E7A 100%)',
  },
  {
    title: 'Climate Control',
    desc: 'Ventilation, circulation fans, and greenhouse management help create an optimal growing environment year-round.',
    icon: (
      <svg className="text-white w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" />
      </svg>
    ),
    images: [climat1, climat2, climat3, climat4],
    bgGrad: 'linear-gradient(135deg, #55D1A3 0%, #35BA8C 100%)',
  },
  {
    title: 'Sustainable Agriculture',
    desc: 'We continuously improve water efficiency, nutrient management, and cultivation practices to reduce environmental impact.',
    icon: (
      <svg className="text-white w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.5 2-5 4-5 8a5 5 0 0 0 10 0c0-4-4-6-5-8z" /><path d="M12 13v8" />
      </svg>
    ),
    images: [sust1, sust2, sust3],
    bgGrad: 'linear-gradient(135deg, #48C99E 0%, #2BB582 100%)',
  },
];

const processSteps = [
  { step: 1,  title: 'Seed Selection',    image: processSeedSelection },
  { step: 2,  title: 'Nursery',           image: processNursery },
  { step: 3,  title: 'Transplanting',     image: processTransplanting },
  { step: 4,  title: 'Vegetative Growth', image: processVegetativeGrowth },
  { step: 5,  title: 'Pollination',       image: processPollination },
  { step: 6,  title: 'Fruit Development', image: processFruitDevelopment },
  { step: 7,  title: 'Harvest',           image: processHarvest },
  { step: 8,  title: 'Grading',           image: processGrading },
  { step: 9,  title: 'Packing',           image: processPacking },
  { step: 10, title: 'Distribution',      image: processDistribution },
];

/* ================================================================== */
/*  Feature Card — alternate left/right text-image layout             */
/* ================================================================== */

function FeatureCard({ feature, index }) {
  const { ref, inView } = useInView();
  const images = feature.images || [feature.image];

  return (
    <div ref={ref} className="transition-all duration-700" style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
    }}>
      <div
        className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[430px]"
        style={{ background: feature.bgGrad }}
      >
        {/* Floating decor blobs */}
        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/6 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-white/6 pointer-events-none group-hover:-translate-y-2 transition-transform duration-700" />

        <div className="flex flex-col">
          {/* Text section */}
          <div className="p-8 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-13 h-13 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center
                group-hover:rotate-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-400 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Chapter {String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-heading leading-snug mt-0.5">
                  {feature.title}
                </h3>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-lg">
              {feature.desc}
            </p>
          </div>

          {/* Image section */}
         <div className="w-full px-8 pb-8 md:px-10 md:pb-10">
  <div
    className={`grid gap-4 w-full ${
    index === 0
      ? "grid-cols-1 sm:grid-cols-2"
      : index === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : index === 1 || index === 2
      ? "grid-cols-2 lg:grid-cols-4"
      : "grid-cols-4"
  }`}
  >
    {images.map((imgSrc, i) => (
      <div
        key={i}
         className={`
  overflow-hidden rounded-2xl shadow-lg
  ${
    index === 1 || index === 2
      ? "h-40 md:h-56 lg:h-52"
      : "aspect-[16/9]"
  }
`}
      >
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Production Process — connected flow                               */
/* ================================================================== */

function ProcessCard({ stepData, index }) {
  const { ref, inView } = useInView();
  const { step, title, image } = stepData;

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(.95)",
        transition: `all .7s ease ${index * 80}ms`,
      }}
    >
      <div className="relative rounded-lg overflow-hidden shadow-md mb-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">

        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#27AE60] flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">
            {step}
          </span>
        </div>

      </div>

      <div className="bg-[#27AE60] rounded-md px-2 py-2 text-center">
        <p className="text-[11px] font-bold text-white">
          {title}
        </p>
      </div>
    </div>
  );
}


/* ================================================================== */
/*  Animated background blob                                          */
/* ================================================================== */

function Blob({ className }) {
  return (
    <div className={`absolute rounded-full blur-3xl pointer-events-none opacity-20 ${className}`}
      style={{
        animation: 'blob-float 8s ease-in-out infinite',
      }}
    />
  );
}

/* ================================================================== */
/*  Main Page                                                          */
/* ================================================================== */

export default function Greenhouse() {
  const heroData = useInView(0.05);

  return (
    <React.Fragment>
      {/* ===== HERO ===== */}
      <section className="relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden bg-[#060E0A]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={greenhouseHero}
            alt="Takumi Greenhouse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#27AE60]/8 via-transparent to-[#F39C12]/8" />

        {/* Decorative glow */}
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#27AE60]/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-16 w-48 h-48 rounded-full bg-[#F39C12]/8 blur-3xl" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div
            ref={heroData.ref}
            className="max-w-2xl transition-all duration-1000"
            style={{
              opacity: heroData.inView ? 1 : 0,
              transform: heroData.inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
            }}
          >
            {/* Top accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#27AE60] rounded-full mx-auto mb-6" />

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-white/70 text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase mb-4 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
               OUR GREENHOUSE
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39C12] to-[#E67E22]">Greenhouse</span>
            </h1>

            

            {/* Bottom divider */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#27AE60]/40 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#F39C12]/40 rounded-full" />
            </div>
          </div>
        </div>

        
        
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <section className="py-14 md:py-20" >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 space-y-8 md:space-y-10">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* ===== PRODUCTION PROCESS ===== */}
      <section className="py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F39C12]">PRODUCTION </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#27AE60]">PROCESS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-text-dark">
            Production Process
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {processSteps.map((stepData, index) => (
    <ProcessCard
        key={stepData.step}
        stepData={stepData}
        index={index}
    />
))}
          </div>
        </div>
      </div>
    </section>

      {/* ===== GLOBAL STYLES ===== */}
      <style>{`
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25%      { transform: translate(15px, -20px) scale(1.08); }
          50%      { transform: translate(-10px, 12px) scale(0.95); }
          75%      { transform: translate(8px, 6px) scale(1.03); }
        }
      `}</style>
    </React.Fragment>
  );
}
