import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/TakumiLogo.png';
import greenhouseHero from '../assets/hero1.png';

import Footer from '../components/Footer';
import Avg from '../assets/avg.png';
import FleshColor from '../assets/color.png';
import Skin from '../assets/skin.png';
import React from 'react';

import ShunkaWhole from '../assets/Shunka.jpg';
import ShunkaCut from '../assets/shunkacut.JPG';
import ShunkaCross from '../assets/Shunkacross.JPG';
import HamiguaWhole from '../assets/hamigua.jpg';
import HamiguaCut from '../assets/hamiguacut.JPG';
import HamiguaCross from '../assets/hamiguacross.png';
import InthanonWhole from '../assets/inthanon.png';
import InthanonCut from '../assets/inthanoncut.png';
import InthanonCross from '../assets/inthanoncross.png';

const productShunka = [ShunkaWhole, ShunkaCut, ShunkaCross];
const productHamigua = [HamiguaWhole, HamiguaCut, HamiguaCross];
const productInthanon = [InthanonWhole, InthanonCut, InthanonCross];

function FadeUp({ children, className = '', delay = '' }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${delay}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {children}
    </div>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/greenhouse', label: 'Our Greenhouse' },
  { href: '/quality', label: 'Quality' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

const productImagesLabels = ['Whole Fruit', 'Cut Fruit', 'Cross Fruit'];

const products = [
  {
    name: 'Shunka',
    description:
      'Premium Japanese-style cantaloupe with beautiful netting, rich aroma, and naturally sweet flavor.',
    images: productShunka,
    specs: {
      avgWeight: {
        personal: '1-1.2 kg',
        couple: '1.2-1.5 kg',
        family: '1.5-2.3 kg',
      },
      brix: '14-18%',
      skin: 'Green',
      fleshColor: 'Orange',
      shelfLife: '±14 days',
    },
  },
  {
    name: 'Hamigua',
    description:
      'Known for its crisp texture, refreshing sweetness, and excellent shelf life.',
    images: productHamigua,
    specs: {
      avgWeight: {
        personal: '1-1.2 kg',
        couple: '1.2-1.5 kg',
        family: '1.5-2.3 kg',
      },
      brix: '14-18%',
      skin: 'Green',
      fleshColor: 'Green',
      shelfLife: '±14 days',
    },
  },
  {
    name: 'Inthanon',
    description:
      'A premium melon variety with outstanding sweetness, attractive appearance, and superior eating quality.',
    images: productInthanon,
    specs: {
      avgWeight: {
        personal: '1-1.2 kg',
        couple: '1.2-1.5 kg',
        family: '1.5-2.3 kg',
      },
      brix: '14-18%',
      skin: 'Yellow',
      fleshColor: 'Green',
      shelfLife: '±14 days',
    },
  },
];

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

/* ── transparent header bar (over hero) ── */
function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Transparent nav */}
      


      {/* Mobile dropdown */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="pt-24 px-6">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden max-w-sm mx-auto p-6">
              <div className="flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-3 px-4 rounded-xl transition-all ${
                      location.pathname === href
                        ? 'text-[#F39C12] bg-[#FFF3E0]'
                        : 'text-text-dark hover:text-[#27AE60] hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── spec badge ── */
function SpecBadge({ icon, label, value, bgColor, textColor, children }) {
  return (
    <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-100/80 bg-white p-4 sm:p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg min-w-[120px] sm:min-w-[140px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: bgColor }}
      />
      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110 ${textColor}`}
          style={{ backgroundColor: bgColor || undefined }}
        >
          {icon}
        </div>
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-70 mb-1">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-tight mb-2">{value}</span>
        {children && (
          <div className="flex flex-col gap-1.5 w-full">{children}</div>
        )}
      </div>
    </div>
  );
}

/* ── single product section ── */
function ProductSection({ product, index }) {
  const isEven = index % 2 === 0;

  /* size chips for Avg Weight badge */
  const sizeChips = (
    <>
      <div className="inline-flex items-center gap-1.5 justify-center px-2.5 py-1.5 rounded-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
        <span className="text-[9px] uppercase tracking-wider text-text-dark/70 font-semibold">Personal</span>
        <span className="text-[10px] font-bold text-[#27AE60]">{product.specs.avgWeight.personal}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 justify-center px-2.5 py-1.5 rounded-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F39C12]" />
        <span className="text-[9px] uppercase tracking-wider text-text-dark/70 font-semibold">Couple</span>
        <span className="text-[10px] font-bold text-[#F39C12]">{product.specs.avgWeight.couple}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 justify-center px-2.5 py-1.5 rounded-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
        <span className="text-[9px] uppercase tracking-wider text-text-dark/70 font-semibold">Family</span>
        <span className="text-[10px] font-bold text-[#27AE60]">{product.specs.avgWeight.family}</span>
      </div>
    </>
  );

  /* icon SVG helpers */
  const weightIcon = (
    <img src={Avg} alt="Average Weight Icon" className="w-5 h-5" />
  );
  const dropletIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z" />
    </svg>
  );
  const leafIcon = (
    <img src={Skin} alt="Skin Icon" className="w-5 h-5" />
  );
  const flowerIcon = (
    <img src={FleshColor} alt="Flesh Color Icon" className="w-5 h-5" />
  );
  const calendarIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  return (
    <section
      className={`min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden py-16 md:py-20 transition-colors duration-500 ${
        isEven ? '' : 'bg-gradient-to-br from-white to-[#F9FFF9]'
      }`}
    >
      {/* Ambient background blobs */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #27AE60 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #F39C12 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-8 lg:px-12">
        <div
          className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
            !isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Left/Top: Info */}
          <div className="flex-1 w-full max-w-xl">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#27AE60]"
                style={{ backgroundColor: 'rgba(39,174,96,0.08)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60] animate-pulse" />
                Product {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Product name */}
            <h2
              className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-[#060E0A] mb-4 tracking-tight leading-[1.1]"
              style={{
                fontFamily: 'var(--font-heading)',
                background: 'linear-gradient(135deg, #060E0A 0%, #27AE60 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {product.name}
            </h2>

            {/* Divider line */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-[2px] rounded-full bg-gradient-to-r from-[#27AE60] to-transparent" style={{ width: '40px' }} />
              <div className="h-[2px] rounded-full bg-gradient-to-r from-[#F39C12] to-transparent" style={{ width: '20px' }} />
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-text-body leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specs badges */}
            <div className="flex flex-wrap items-center gap-3">
              <SpecBadge
                icon={weightIcon}
                label="Avg Weight"
                textColor="text-[#27AE60]"
                bgColor="#ECFDF5"
              >
                {sizeChips}
              </SpecBadge>
              <SpecBadge
                icon={dropletIcon}
                label="Brix"
                value={product.specs.brix}
                textColor="text-[#F39C12]"
                bgColor="#FFF8EE"
              />
              <SpecBadge
                icon={leafIcon}
                label="Skin"
                value={product.specs.skin}
                textColor="text-[#27AE60]"
                bgColor="#ECFDF5"
              />
              <SpecBadge
                icon={flowerIcon}
                label="Flesh Color"
                value={product.specs.fleshColor}
                textColor="text-[#F39C12]"
                bgColor="#ECFDF5"
              />
              <SpecBadge
                icon={calendarIcon}
                label="Shelf Life"
                value={product.specs.shelfLife}
                textColor="text-[#27AE60]"
                bgColor="#ECFDF5"
              />
            </div>
          </div>

          {/* Right/Bottom: Images */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {product.images.map((image, index) => (
  <div
    key={`${product.name}-${index}`}
    className="group flex flex-col items-center"
  >
    <div
      className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl"
      style={{
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src={image}
        alt={`${product.name} ${productImagesLabels[index]}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    <div className="mt-3 rounded-lg bg-[#27AE60] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
      {productImagesLabels[index]}
    </div>
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── main component ── */
export default function ProductsPage() {
   const heroData = useInView(0.05);
  return (
    <React.Fragment>
    <div className="min-h-screen" style={{ background: '#F7FAF6' }}>
      <HeaderBar />

      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden bg-[#060E0A]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={greenhouseHero}
            alt="Premium Melon Collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#27AE60]/8 via-transparent to-[#F39C12]/8" />

        {/* Decorative glow */}
        <div className="absolute top-1/3 left-20 w-56 h-56 rounded-full bg-[#27AE60]/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-24 w-44 h-44 rounded-full bg-[#F39C12]/10 blur-3xl" />

        {/* Center text */}
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
              PRODUCTS
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39C12] to-[#E67E22]">PRODUCTS</span>
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

      {/* Product Sections */}
      {products.map((product, i) => (
        <FadeUp key={product.name}>
          <ProductSection product={product} index={i} />
        </FadeUp>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: '#0bb67454' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #27AE60 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #F39C12 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8">
            We supply premium melons to distributors, retailers, and partners across Indonesia.
            Let's grow together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#27AE60] to-[#2ecc71] hover:from-[#219A52] hover:to-[#27AE60] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get in Touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
    </React.Fragment>
  );
}
