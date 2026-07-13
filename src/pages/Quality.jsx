import React from 'react';
import hero1 from '../assets/hero1.png';
import imgSeedSelection from '../assets/seed.jpg';
import imgNursery from '../assets/Sustainable1.jpg';
import imgGrading from '../assets/grading.jpg';
import imgPacking from '../assets/packing.png';
import SeedIcon from '../assets/seedicon.png';
import PackingIcon from '../assets/packingicon.png';
/* ================================================================== */
/*  Intersection Observer                                              */
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

const qualityCards = [
  {
    title: 'Seed Selection',
    desc: 'Only carefully selected premium genetics are cultivated.',
  },
  {
    title: 'Crop Management',
    desc: 'Every stage is monitored by experienced growers.',
  },
  {
    title: 'Quality Inspection',
    desc: 'Every harvested melon undergoes grading and inspection.',
  },
  {
    title: 'Packing',
    desc: 'Proper handling ensures freshness and product quality.',
  },
];

const photoBoxes = [
  { num: 1, title: 'Seed Selection', image: imgSeedSelection },
  { num: 2, title: 'Crop Management', image: imgNursery },
  { num: 3, title: 'Quality Inspection', image: imgGrading },
  { num: 4, title: 'Packing', image: imgPacking },
];

/* ================================================================== */
/*  Wave Divider — organic curve between sections                      */
/* ================================================================== */

function WaveDivider({ flip }) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? '-my-1 rotate-180' : '-mt-0.5'}`}
      style={{ height: 'clamp(12px, 2vh, 28px)' }}
    >
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-full" style={{ display: 'block' }}>
        <path
          d={flip
            ? 'M0,25 C360,50 720,0 1080,25 C1260,38 1380,30 1440,25 L1440,50 L0,50 Z'
            : 'M0,25 C360,0 720,50 1080,25 C1260,12 1380,20 1440,25 L1440,0 L0,0 Z'
          }
          fill="white"
          style={{ opacity: 0.5 }}
        />
      </svg>
    </div>
  );
}

/* ================================================================== */
/*  Icons                                                              */
/* ================================================================== */

function IconSeed() {
  return (
    <img src={SeedIcon} alt="Seed Icon" className="w-7 h-7" />
  );
}
function IconCrop() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-1.5 2-5 4-5 8a5 5 0 0 0 10 0c0-4-4-6-5-8z" /><path d="M12 13v8" />
    </svg>
  );
}
function IconInspect() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" /><path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function IconPack() {
  return (
    <img src={PackingIcon} alt="Packing Icon" className="w-7 h-7" />
  );
}

const ICONS = { 'Seed Selection': IconSeed, 'Crop Management': IconCrop, 'Quality Inspection': IconInspect, 'Packing': IconPack };

/* ================================================================== */
/*  Section Heading                                                    */
/* ================================================================== */

function SectionHeading({ subtitle, title }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="text-center mb-12 md:mb-14 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '0ms' }}
    >
      <div className="flex items-center justify-center gap-2.5 mb-3">
        <div className="h-px w-10 rounded-full" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#2EB574]">{subtitle}</span>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#2EB574]/40 rounded-full" />
      </div>
      <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900">{title}</h2>
      <div className="mt-4 w-14 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #2EB574, #5CD6A7)' }} />
    </div>
  );
}

/* ================================================================== */
/*  Quality Card — organic wave floating                               */
/* ================================================================== */

function QualityCard({ card, index }) {
  const { ref, inView } = useInView();
  /* Wave y-offsets — naik turun alami */
  const offsets = [0, 18, -16, 12];
  const IconComp = ICONS[card.title];

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div
        className="rounded-2xl p-5 h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
        style={{
          background: 'linear-gradient(160deg, #ffffff 0%, #f0faf5 100%)',
          boxShadow: '0 1px 8px rgba(46,181,116,0.06)',
          transform: inView ? `translateY(${offsets[index]}px)` : `translateY(${offsets[index] + 24}px)`,
        }}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2EB574]/10 to-[#2EB574]/5 flex items-center justify-center mb-3 mx-auto text-[#2EB574]">
          <IconComp />
        </div>
        <h3 className="text-[13px] sm:text-sm font-bold text-gray-800 mb-2 font-heading text-center leading-snug">{card.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed text-center">{card.desc}</p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Photo Box                                                          */
/* ================================================================== */

function PhotoBox({ data, index }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        {/* Image container */}
        <div className="aspect-[4/3] relative">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Number badge — top right */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md z-10">
            <span className="text-sm font-bold" style={{ color: '#2EB574' }}>{data.num}</span>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-0 inset-x-0 p-4">
            <div className="flex items-end gap-2">
              <div className="h-px flex-1 bg-white/40 rounded-full" />
              <p className="text-white text-xs font-bold tracking-wide whitespace-nowrap">{data.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Main Page                                                          */
/* ================================================================== */

export default function Quality() {
  const heroRef = useInView(0.05);

  return (
    <React.Fragment>
      {/* ===== HERO ===== */}
      <section className="relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden bg-[#060E0A]">
        {/* Background image with subtle zoom */}
        <div className="absolute inset-0">
          <img
            src={hero1}
            alt="Quality"
            className="w-full h-full object-cover animate-hero-zoom"
          />
        </div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2EB574]/8 via-transparent to-transparent" />

        {/* Decorative glow */}
        <div className="absolute top-1/4 -left-24 w-48 h-48 rounded-full bg-[#2EB574]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-16 w-36 h-36 rounded-full bg-[#F39C12]/8 blur-2xl" />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col justify-center h-full min-h-[50vh] md:min-h-[65vh]">
          <div
            ref={heroRef.ref}
            className="max-w-2xl transition-all duration-1000"
            style={{
              opacity: heroRef.inView ? 1 : 0,
              transform: heroRef.inView ? 'translateX(0)' : 'translateX(-50px)',
            }}
          >
            {/* Top accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#2EB574] to-transparent rounded-full mb-4" />

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-white/70 text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase mb-4 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EB574]" />
              QUALITY
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight">
              Quality You<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39C12] to-[#E67E22]">Can</span> Trust
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
              Every melon goes through rigorous quality standards — from seed selection to final packing.
            </p>
          </div>
        </div>

       
      </section>

      {/* Bridge — hero → white (cards section) */}
      <WaveDivider />

      {/* ===== QUALITY CARDS (white bg) ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeading subtitle="Our Standards" title="Quality You Can Trust" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5">
            {qualityCards.map((card, i) => (
              <QualityCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      

      {/* ===== PHOTO BOXES (green bg) ===== */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {photoBoxes.map((box, i) => (
              <PhotoBox key={box.num} data={box} index={i} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
