import productShunka from '../assets/Shunka.jpg';
import productHamigua from '../assets/hamigua.jpg';
import productInthanon from '../assets/inthanon.png';
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


const products = [
  {
    name: 'Shunka',
    Brix: '14-18%',
    size: '1.2 kg',
    description: 'Japanese-style cantaloupe with beautiful netting, rich aroma, and naturally sweet flavor.',
    image: productShunka,
  },
  {
    name: 'Hamigua',
    Brix: '14-18%',
    size: '1.2 kg',
    description: 'Known for its crisp texture, refreshing sweetness, and excellent shelf life.',
    image: productHamigua,
  },
  {
    name: 'Inthanon',
    Brix: '14-18%',
    size: '1.2 kg',
    description: 'A premium melon variety with outstanding sweetness, attractive appearance, and superior eating quality.',
    image: productInthanon,
  },
];

/* ── premium product card ── */
function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
        isEven
          ? 'bg-gradient-to-br from-white via-[#FAFFB8]/30 to-[#E8F5E9]/60 shadow-lg border border-gray-100/80'
          : 'bg-gradient-to-br from-white via-[#FFF3E0]/30 to-[#E8F5E9]/60 shadow-lg border border-gray-100/80'
      }`}
    >
      {/* Ambient glow behind card */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.15) 0%, transparent 70%)' }}
      />

      {/* Top accent stripe */}
      <div className={`h-1.5 w-full rounded-t-3xl bg-gradient-to-r ${
        isEven ? 'from-[#27AE60] to-[#2ecc71]' : 'from-[#F39C12] to-[#E67E22]'
      }`} />

      {/* Product Image Hero */}
      <div className="relative flex flex-col items-center px-6 pt-8 pb-4">
        {/* Premium badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-md"
            style={{ background: isEven ? 'linear-gradient(135deg, #27AE60, #2ecc71)' : 'linear-gradient(135deg, #F39C12, #E67E22)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Premium
          </span>
        </div>

        

        {/* Large melon image — circular with premium frame */}
        <div className="relative mb-6">
          {/* Animated pulsing aura */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"
            style={{ background: `conic-gradient(from 0deg, ${isEven ? '#27AE60' : '#F39C12'}, #E8F5E9, ${isEven ? '#27AE60' : '#F39C12'})` }}
          />

          {/* Outer decorative ring */}
          <div
            className="w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center p-2"
            style={{ background: isEven ? 'linear-gradient(135deg, #27AE60, #2ecc71)' : 'linear-gradient(135deg, #F39C12, #E67E22)' }}
          >
            {/* Inner image circle */}
            <div className="w-full h-full rounded-full overflow-hidden border-3 border-white shadow-2xl relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Glassy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Product name */}
        <h3
          className="font-heading font-black text-2xl md:text-3xl mb-2 tracking-tight transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-heading)',
            background: isEven
              ? 'linear-gradient(135deg, #060E0A 0%, #27AE60 100%)'
              : 'linear-gradient(135deg, #060E0A 0%, #F39C12 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {product.name}
        </h3>

        {/* Decorative divider */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className={`h-0.5 rounded-full ${isEven ? 'bg-[#27AE60]' : 'bg-[#F39C12]'}`} style={{ width: '24px' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
          <div className={`h-0.5 rounded-full ${isEven ? 'bg-[#27AE60]' : 'bg-[#F39C12]'}`} style={{ width: '24px' }} />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-text-body leading-relaxed mb-6 max-w-xs">
          {product.description}
        </p>

        {/* Specs — pill style */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {/* Size badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#ECFDF5] text-[#27AE60] border border-[#27AE60]/20 shadow-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8v8" />
            </svg>
            {product.size}
          </span>

          {/* Brix badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FFF8EE] text-[#F39C12] border border-[#F39C12]/20 shadow-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z" />
            </svg>
            Brix {product.Brix}
          </span>

          {/* Quality badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#ECFDF5] text-[#27AE60] border border-[#27AE60]/20 shadow-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Best Seller
          </span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-6">
        <a
          href="/products"
          className={`block w-full text-center text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            isEven
              ? 'border-[#27AE60]/30 text-[#27AE60] hover:bg-[#27AE60] hover:text-white hover:border-[#27AE60]'
              : 'border-[#F39C12]/30 text-[#F39C12] hover:bg-[#F39C12] hover:text-white hover:border-[#F39C12]'
          }`}
        >
          View Details →
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const heroData = useInView(0.05);
  return (
    <React.Fragment>
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #27AE60 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #F39C12 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
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
          
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-text-dark tracking-tight">
            <span className="text-[#27AE60]">FEATURED </span>
            <span className="text-[#F39C12]">PRODUCTS</span>
          </h2>
          
          {/* Bottom accent */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-[#27AE60] to-transparent rounded-full" />
            <div className="h-1 w-1 bg-[#27AE60] rounded-full" />
            <div className="h-1 w-16 bg-gradient-to-l from-[#F39C12] to-transparent rounded-full" />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
}
