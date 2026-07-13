import { useState } from 'react';
import React from 'react';
import { Menu, X, ExternalLink, Sprout, Leaf, Lightbulb, Scale } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import heroImg from '../assets/hero1.png';
import Teamwork from '../assets/teamwork.png';
import heroGreenhouse from '../assets/hero1.png';
import TakumiTeam from '../assets/takumiteam.jpg';
/* ------------------------------------------------------------------ */
/*  Nav — identical HeaderBar from other pages                         */
/* ------------------------------------------------------------------ */


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

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/greenhouse', label: 'Our Greenhouse' },
  { href: '/quality', label: 'Quality' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-[72px]">
          <Link to="/" className="flex-shrink-0">
            <img
              src={heroImg}
              alt="Takumi Logo"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === href
                    ? 'text-[#F39C12]'
                    : 'text-text-dark hover:text-[#F39C12]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-text-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden">
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

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook                                         */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Animate wrapper (entrance animations)                             */
/* ------------------------------------------------------------------ */

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

function SlideRight({ children, className = '', align = 'left' }) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : align === 'left' ? 'translateX(-40px)' : 'translateX(40px)',
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Benefits                                                          */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    label: 'Career Development',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="#fff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Professional Training',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#fff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Performance-Based Bonus',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.5 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" fill={icon => icon ? "#fff" : "none"} stroke="#fff" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    label: 'Supportive Working Environment',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="#fff" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Job positions                                                     */
/* ------------------------------------------------------------------ */

const jobPositions = [
  {
    title: 'Business Operations Staff',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="#22C55E" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="#22C55E" strokeWidth="1.5"/>
        <rect x="6" y="13" width="4" height="2" rx="0.5" fill="#22C55E"/>
      </svg>
    ),
  },
  {
    title: 'Finance & Administration Staff',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#22C55E" strokeWidth="1.5"/>
        <line x1="3" y1="9" x2="21" y2="9" stroke="#22C55E" strokeWidth="1.5"/>
        <rect x="6" y="12" width="3" height="2" rx="0.5" fill="#22C55E"/>
        <rect x="10" y="12" width="3" height="2" rx="0.5" fill="#22C55E"/>
        <rect x="14" y="12" width="3" height="2" rx="0.5" fill="#22C55E"/>
        <rect x="6" y="15" width="3" height="2" rx="0.5" fill="#22C55E"/>
        <rect x="10" y="15" width="3" height="2" rx="0.5" fill="#22C55E"/>
        <rect x="14" y="15" width="3" height="2" rx="0.5" fill="#22C55E"/>
      </svg>
    ),
  },
  {
    title: 'Senior Grower',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="#22C55E" strokeWidth="1.5"/>
        <path d="M7 20a5 5 0 0 1 10 0" stroke="#22C55E" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Junior Grower',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="#22C55E" strokeWidth="1.5"/>
        <path d="M7 20a5 5 0 0 1 10 0" stroke="#22C55E" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Careers() {
  const heroRef = useInView(0.05);
  return (
    <>
      {/* ================================================================ */}
      {/*  HERO — full-width image with overlay                            */}
      {/* ================================================================ */}
      <React.Fragment>
      <section className='relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden bg-[#060E0A]'>
              {/* Background image */}
              <div className='absolute inset-0'>
                <img src={heroGreenhouse} alt='Our Story' className='w-full h-full object-cover' />
              </div>
              {/* Layered overlays */}
              <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60' />
              <div className='absolute inset-0 bg-gradient-to-r from-[#F39C12]/8 via-transparent to-[#27AE60]/8' />
              {/* Decorative glow */}
              <div className='absolute top-1/4 left-20 w-56 h-56 rounded-full bg-[#F39C12]/10 blur-3xl' />
              <div className='absolute bottom-1/3 right-24 w-44 h-44 rounded-full bg-[#27AE60]/8 blur-3xl' />
              {/* Content */}
              <div className='relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col justify-center h-full min-h-[50vh] md:min-h-[65vh]'>
                <div
                ref={heroRef.ref}
                  className="max-w-2xl transition-all duration-1000"
                  style={{
                    opacity: heroRef.inView ? 1 : 0,
                    transform: heroRef.inView ? 'translateX(0)' : 'translateX(-50px)',
                  }}>
                  {/* Top accent line */}
                  <div className='w-12 h-0.5 bg-gradient-to-r from-[#F39C12] to-transparent rounded-full mb-4' />
                  {/* Badge */}
                  <span className='inline-flex items-center gap-2 text-white/70 text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase mb-4 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full'>
                    <span className='w-1.5 h-1.5 rounded-full bg-[#F39C12]' />
                    Careers
                  </span>
                  {/* Heading */}
                  <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight'>
                    Why Join <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F39C12] to-[#E67E22]'>Takumi</span>
                  </h1>
                  {/* Subtitle */}
                  <p className='mt-5 text-white/60 text-sm md:text-base max-w-lg leading-relaxed'>
                    We believe great people grow great companies. Join us to build the future of premium agriculture.
                  </p>
                  {/* Bottom divider */}
                  <div className='mt-6 flex items-center gap-2'>
                    <div className='h-px w-8 bg-gradient-to-l from-transparent to-[#F39C12]/40 rounded-full' />
                    <div className='w-1.5 h-1.5 rounded-full bg-[#F39C12]' />
                    <div className='h-px w-8 bg-gradient-to-r from-transparent to-[#27AE60]/40 rounded-full' />
                  </div>
                </div>
              </div>
              
            </section>

      {/* ================================================================ */}
      {/*  MAIN CONTENT — gradient background                              */}
      {/* ================================================================ */}
      <section
        className="relative overflow-hidden"
        
      >

        {/* ---- COMPANY CULTURE ---- */}
        <section className='py-20 md:py-28 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#22C55E]/3 via-transparent to-[#F39C12]/3' />

        <div className='absolute bottom-0 left-0 w-80 h-80 bg-[#F39C12]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4' />

        <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
          {/* Section Header */}
          <div className='text-center mb-16'>

            <h2 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-[#060E0A]'>
              COMPANY <span className='text-[#F39C12]'> CULTURE</span>
            </h2>
            <div className='relative w-20 h-1 mx-auto mt-6 rounded-full'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#27AE60] to-[#F39C12] rounded-full' />
              <div className='absolute inset-0 bg-gradient-to-r from-[#27AE60] to-[#F39C12] rounded-full animate-ping opacity-30' style={{ animationDuration: '3s' }} />
            </div>
          </div>
          
          <FadeUp>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
            {/* Passion */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#27AE60]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500' />
              <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#F39C12]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100' />
              <div className='relative z-10 text-center'>
                <div className='mx-auto w-16 h-16 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-5'>
                  <Sprout className='w-8 h-8 text-white group-hover:animate-bounce' />
                </div>
                <h3 className='font-heading font-bold text-lg text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Passion</h3>
              </div>
            </div>

            {/* Care */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#27AE60]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500' />
              <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#F39C12]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100' />
              <div className='relative z-10 text-center'>
                <div className='mx-auto w-16 h-16 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-5'>
                  <Leaf className='w-8 h-8 text-white group-hover:animate-bounce' />
                </div>
                <h3 className='font-heading font-bold text-lg text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Care</h3>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#27AE60]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500' />
              <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#F39C12]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100' />
              <div className='relative z-10 text-center'>
                <div className='mx-auto w-16 h-16 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-5'>
                  <Lightbulb className='w-8 h-8 text-white group-hover:animate-bounce' />
                </div>
                <h3 className='font-heading font-bold text-lg text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Continuous Improvement</h3>
              </div>
            </div>

            {/* Teamwork */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#27AE60]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500' />
              <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#F39C12]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100' />
              <div className='relative z-10 text-center'>
                <div className='mx-auto w-16 h-16 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-5'>
                  <img src={Teamwork} alt="Teamwork" className='w-8 h-8 brightness-0 invert group-hover:animate-bounce' />
                </div>
                <h3 className='font-heading font-bold text-lg text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Teamwork</h3>
              </div>
            </div>

            {/* Integrity */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#27AE60]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500' />
              <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#F39C12]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100' />
              <div className='relative z-10 text-center'>
                <div className='mx-auto w-16 h-16 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-5'>
                  <Scale className='w-8 h-8 text-white group-hover:animate-bounce' />
                </div>
                <h3 className='font-heading font-bold text-lg text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Integrity</h3>
              </div>
            </div>
          </div>
          </FadeUp>
        </div>
      </section>

        {/* ---- BENEFITS + PHOTO ---- */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-6 md:py-10">
          <FadeUp>
            <div
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col md:flex-row"
              style={{ minHeight: '360px' }}
            >
              {/* Left panel — Benefits */}
              <div
                className="relative flex-1 p-7 md:p-10 text-white overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '28px 28px',
                }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-white/40" />
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">Benefits</h3>
                    <div className="h-px flex-1 bg-white/40" />
                  </div>

                  <div className="space-y-5">
                    {benefits.map((b, i) => (
                      <SlideRight key={i} align="left" delay={`delay-${Math.min(i * 100, 300)}`}>
                        <div className="flex items-center gap-3.5 group">
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-3">
                            {b.svg}
                          </div>
                          <span className="text-sm md:text-base font-semibold text-white tracking-wide">{b.label}</span>
                        </div>
                      </SlideRight>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel — Greenhouse photo */}
              <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={TakumiTeam}
                  alt="Greenhouse interior"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.25) 100%)',
                }} />
                {/* Bottom highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
                  background: 'linear-gradient(to top, rgba(34,197,94,0.2), transparent)',
                }} />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ---- OPEN POSITIONS ---- */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24 pt-6 md:pt-10">
          {/* Section heading */}
          <FadeUp>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-10 md:mb-14">
              <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#F39C12]" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black tracking-tight">
                Open Positions
              </h2>
              <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#F39C12]" />
            </div>
          </FadeUp>

          {/* Position cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {jobPositions.map((jp, i) => (
              <FadeUp key={i}>
                <div
                  className="group relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 cursor-default overflow-hidden"
                  style={{ minHeight: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                  {/* Hover gradient sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.03), rgba(243,156,18,0.05))',
                    }}
                  />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 rounded-r-full bg-gradient-to-r from-[#22C55E] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Icon */}
                  <div className="relative w-14 h-14 rounded-2xl bg-[#D1FAE5] flex items-center justify-center mb-4 mx-auto transition-all duration-500 group-hover:bg-white group-hover:ring-2 ring-[#22C55E]/30 group-hover:scale-110 group-hover:rotate-3">
                    {jp.svg}
                  </div>

                  {/* Title */}
                  <p
                    className="relative text-sm md:text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-[#16A34A]"
                    style={{ color: '#F39C12' }}
                  >
                    {jp.title}
                  </p>

                  {/* Hover arrow */}
                  <div className="relative mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <FadeUp>
            <div className="text-center mt-12 md:mt-14">
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Visit our LinkedIn to see detailed job descriptions and requirements
              </p>
              <a
                href="https://www.linkedin.com/company/pt-rimba-agro-nusantara/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#E67E22] text-white text-sm font-semibold px-7 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View on LinkedIn
                <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
      </React.Fragment>
    </>
    
  );
}
