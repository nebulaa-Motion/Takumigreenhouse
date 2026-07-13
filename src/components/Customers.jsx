import chandraImg from '../assets/chandra.png';
import gelaelImg from '../assets/gelael.png';
import happyFrutiImg from '../assets/happy-fruti.png';
import foodHallImg from '../assets/the-food-hall.png';
import tokoJajanBuahImg from '../assets/toko-jajan-buah.png';
import palebangIndahMallImg from '../assets/palebang-indah-mall.png';
import palembangSquareImg from '../assets/palembang-square.png';
import fruitMarketImg from '../assets/fruit-market.png';
import strawberryImg from '../assets/strawberry-plg.png';
import React from 'react';

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

const customerGroups = [
  {
    region: 'Jabodetabek',
    customers: [
      { name: 'Fresh Market', img: fruitMarketImg },
      { name: 'FOODHALL', img: foodHallImg },
    ],
    
  },
  {
    region: 'Bandar Lampung',
    customers: [
      { name: 'Chandra', img: chandraImg },
      { name: 'GELAEL MALL', img: gelaelImg },
      { name: 'TOKO JAJAN BUAH', img: tokoJajanBuahImg },
    ],
    
  },
  {
    region: 'Palembang',
    customers: [
      { name: 'Happy Mart', img: happyFrutiImg },
      { name: 'Alomia', img: strawberryImg },
      { name: 'Palembang Indah Mall', img: palebangIndahMallImg },
      { name: 'Palembang Square', img: palembangSquareImg },
    ],
    
  },
];

/* ── single customer logo card ── */
function CustomerCard({ customer }) {
  const { img, name } = customer;

  return (
    <div className="group/customer relative flex items-center justify-center">
      {/* Glow background on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/customer:opacity-100 transition-all duration-500 scale-105"
        style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.08) 0%, transparent 70%)' }}
      />

      {/* Card container */}
      <div
        className="relative w-full max-w-[200px] bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100/60
                    transition-all duration-500 cursor-default
                    group-hover/customer:-translate-y-1.5 group-hover/customer:shadow-lg group-hover/customer:border-[#27AE60]/20"
      >
        {img ? (
          <div className="flex items-center justify-center transition-transform duration-500 group-hover/customer:scale-105">
            <img
              src={img}
              alt={name}
              className="w-full object-contain transition-all duration-500 max-h-[90px]
                         grayscale-[30%] brightness-95 group-hover/customer:grayscale-0 group-hover/customer:brightness-105 group-hover/customer:drop-shadow-[0_4px_12px_rgba(39,174,96,0.15)]"
              style={{ maxHeight: '90px' }}
            />
          </div>
        ) : (
          <span className="text-xs md:text-sm font-semibold text-text-dark text-center px-3 py-2 transition-all duration-300 group-hover/customer:text-[#27AE60]">
            {name}
          </span>
        )}
      </div>
    </div>
  );
}

/* ── region section card ── */
function RegionSection({ group, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`transition-all duration-700 group/region`}
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        animation: 'fadeInUp 0.7s ease forwards',
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Region header with icon + accent */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-xl md:text-2xl">{group.icon}</span>
        <div
          className={`h-0.5 w-8 rounded-full transition-all duration-500 group-hover/region:w-14 ${
            isEven ? 'bg-[#27AE60]' : 'bg-[#F39C12]'
          }`}
        />
        <h3
          className="font-heading font-bold text-base md:text-lg lg:text-xl text-text-dark
                     transition-colors duration-300 group-hover/region:text-[#27AE60]"
        >
          {group.region}
        </h3>
        <div
          className={`h-0.5 w-8 rounded-full transition-all duration-500 group-hover/region:w-14 ${
            isEven ? 'bg-[#27AE60]' : 'bg-[#F39C12]'
          }`}
        />
      </div>

      {/* Customer logos grid */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {group.customers.map((customer) => (
          <CustomerCard key={customer.name} customer={customer} />
        ))}
      </div>
    </div>
  );
}

export default function Customers() {
  const heroData = useInView(0.08);
  const totalCustomers = customerGroups.reduce((sum, g) => sum + g.customers.length, 0);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #27AE60 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #F39C12 0%, transparent 70%)' }}
        />
      </div>

      {/* Inject keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          ref={heroData.ref}
          className="transition-all duration-1000"
          style={{
            opacity: heroData.inView ? 1 : 0,
            transform: heroData.inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
          }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Decorative lines */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#27AE60] rounded-full" />
              <div className="w-2 h-2 rounded-full bg-[#27AE60] shadow-sm" />
              <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#F39C12] rounded-full" />
            </div>

            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-text-dark tracking-tight">
              <span className="text-[#27AE60]">OUR </span>
              <span className="text-[#F39C12]">CUSTOMERS</span>
            </h2>

            

            {/* Stats bar */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECFDF5] border border-[#27AE60]/20">
                <svg className="w-4 h-4 text-[#27AE60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-xs font-bold text-[#27AE60]">{totalCustomers} Partners</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF8EE] border border-[#F39C12]/20">
                <svg className="w-4 h-4 text-[#F39C12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-xs font-bold text-[#F39C12]">{customerGroups.length} Regions</span>
              </div>
            </div>

            
          </div>

          {/* Customer Groups */}
          <div className="space-y-14 md:space-y-16">
            {customerGroups.map((group, index) => (
              <RegionSection key={group.region} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
