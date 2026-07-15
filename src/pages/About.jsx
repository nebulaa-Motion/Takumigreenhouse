import { Flag, Target, Award, Rocket, Sprout, Leaf, Lightbulb, Scale, User, Star } from 'lucide-react';
import heroGreenhouse from '../assets/hero1.png';
import founderImg from '../assets/founder.jpg';
import React from 'react';
import greenhouse1 from '../assets/greenhouse1.JPG';
import greenhouse2 from '../assets/greenhouse2.jpg';
import greenhouse3 from '../assets/greenhouse3.JPG';
import greenhouse4 from '../assets/greenhouse4.PNG';
import img1 from '../assets/img1.JPG';
import TakumiTeam from '../assets/takumiteam.JPG';

const galleryImages = [
  TakumiTeam,
  greenhouse2,
  greenhouse3,
  img1,
  
];
const milestoneData = [
  { year: '2025', title: 'Takumi Greenhouse Established with 3 Greenhouses', icon: Sprout },
  { year: '2025', title: 'First Commercial Harvest', icon: Award },
  { year: '2026', title: 'Expansion to Five Greenhouses', icon: Leaf },
  { year: '2027', title: 'Expanding Premium Fruit Production', icon: Rocket },
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
/* ========== Single milestone card component (reused for desktop & mobile) ========== */
function MilestoneCardContent({ milestone, variant = 'desktop' }) {
  const IconComponent = milestone.icon;
  return (
    <div className='group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default hover:-translate-y-3 hover:border-[#27AE60]/30'>
      {/* Animated gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 via-[#27AE60]/0 to-[#27AE60]/0 group-hover:from-[#27AE60]/5 group-hover:via-[#27AE60]/3 group-hover:to-[#F39C12]/5 transition-all duration-500 rounded-2xl' />
      {/* Left accent bar */}
      <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#27AE60] to-[#F39C12] rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top' />
      {/* Glowing orb on hover */}
      <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#27AE60]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      <div className='absolute -bottom-10 -left-10 w-24 h-24 bg-[#F39C12]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100' />

      <div className='relative z-10 text-center'>
        {/* Icon with pulse animation */}
        <div className='mx-auto w-14 h-14 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-4'>
          <IconComponent className='w-7 h-7 text-white group-hover:animate-bounce' />
        </div>
        {/* Year badge */}
        <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#27AE60] bg-[#27AE60]/10 group:bg-[#27AE60]/15 group-hover:bg-[#27AE60]/20 group-hover:scale-105 transition-all duration-300'>
          <span className='w-1.5 h-1.5 rounded-full bg-[#27AE60] animate-pulse' />
          {milestone.year}
        </span>
        {/* Title */}
        <p className='mt-3 text-sm font-semibold text-[#060E0A] leading-relaxed group-hover:text-[#27AE60] transition-colors duration-300'>
          {milestone.title}
        </p>
        {/* Bottom shimmer line */}
        <div className='mt-4 h-[2px] w-0 bg-gradient-to-r from-[#27AE60] via-[#2ecc71] to-[#F39C12] group-hover:w-full transition-all duration-700 rounded-full' />
      </div>
    </div>
  );
}

export default function About() {
  const heroRef = useInView(0.05);

  return (
    <>
     <React.Fragment>
      {/* ====== HERO / OUR STORY SECTION ====== */}
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
              OUR STORY
            </span>
            {/* Heading */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight'>
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F39C12] to-[#E67E22]'>Story</span>
            </h1>
            {/* Subtitle */}
            <p className='mt-5 text-white/60 text-sm md:text-base max-w-lg leading-relaxed'>
              Takumi Greenhouse was established with a vision to redefine premium melon cultivation in Indonesia. Combining modern greenhouse technology with dedicated craftsmanship, we focus on producing melons that consistently meet the highest quality standards.
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

      {/* ====== FOUNDER SECTION ====== */}
      <section className='py-20 md:py-28 bg-gradient-to-b from-white via-[#F0FFF6] to-white relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-72 h-72 bg-[#27AE60]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3' />
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-[#F39C12]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/2' />

        <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
          <FadeUp>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Left: Founder Image */}
            <div className='lg:col-span-2 flex justify-center lg:justify-end'>
              <div className='relative group'>
                {/* Decorative border frame */}
                <div className='absolute -inset-3 bg-gradient-to-br from-[#27AE60] via-[#2ecc71] to-[#F39C12] rounded-3xl opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-700' />
                <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                  {/* Top accent bar */}
                  <div className='h-1.5 bg-gradient-to-r from-[#27AE60] via-[#2ecc71] to-[#F39C12]' />

                  <img
                    src={founderImg}
                    alt='Andre Farquhar Barusan'
                    className='w-full max-w-[360px] lg:max-w-[380px] aspect-[3/4] object-cover'
                  />

                  {/* Bottom overlay gradient */}
                  <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent' />
                </div>

                {/* Floating accent dot top-right */}
                <div className='absolute -top-3 -right-3 w-6 h-6 bg-[#F39C12] rounded-full shadow-lg shadow-[#F39C12]/40 animate-pulse' />

                {/* Floating accent dot bottom-left */}
                <div className='absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl rotate-12 shadow-lg shadow-[#27AE60]/30' />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className='lg:col-span-3 text-center lg:text-left'>
              {/* Top accent line */}
              <div className='hidden lg:block w-16 h-0.5 bg-gradient-to-r from-[#F39C12] to-transparent rounded-full mb-6' />

              {/* Role badge */}
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27AE60]/10 border border-[#27AE60]/20 mb-6'>
                <Star className='w-4 h-4 text-[#27AE60]' fill='#27AE60' />
                <span className='text-xs font-bold uppercase tracking-[0.25em] text-[#27AE60]'>Founder & Lead</span>
              </div>

              {/* Name */}
              <h2 className='font-heading font-black text-3xl md:text-4xl lg:text-5xl text-[#060E0A] tracking-tight leading-tight'>
                ANDRE FARQUHAR{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#27AE60] to-[#2ecc71]'>BARUSMAN</span>
              </h2>

              {/* Divider */}
              <div className='flex items-center justify-center lg:justify-start gap-2 mt-6 mb-8'>
                <div className='h-px w-12 bg-gradient-to-l from-transparent to-[#F39C12]/50 rounded-full' />
                <div className='w-2 h-2 rounded-full bg-[#27AE60]' />
                <div className='h-px w-12 bg-gradient-to-r from-transparent to-[#27AE60]/50 rounded-full' />
              </div>

              {/* Bio */}
              <p className='text-base leading-relaxed text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8'>
                As the founder of Takumi Greenhouse, Andre Farquhar Barusman established the company with a clear mission: to bring world-class greenhouse cultivation to Indonesia. With a deep commitment to quality and innovation, he leads the team in producing premium melons that meet international standards.
              </p>

              {/* Quote */}
              <div className='relative max-w-xl mx-auto lg:mx-0'>
                <div className='absolute -top-2 left-0 text-6xl font-serif text-[#27AE60]/20 leading-none'>" </div>
                <blockquote className='relative z-10 pl-6 italic text-gray-700 leading-relaxed'>
                  Excellence in agriculture isn't just about growing crops — it's about cultivating precision, passion, and sustainability in every step of the process.
                </blockquote>
              </div>

              {/* Social / Contact icons */}
              <div className='flex items-center justify-center lg:justify-start gap-4 mt-8'>
                
                <a
                  href='https://www.linkedin.com/in/andre-farquhar-barusman-b6496ab7/?isSelfProfile=false'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group/icon flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-[#27AE60]/40 hover:shadow-md transition-all duration-300'
                >
                  <svg className='w-5 h-5 text-gray-500 group-hover/icon:text-[#27AE60] transition-colors' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z' />
                    <rect x='2' y='9' width='4' height='12' />
                    <circle cx='4' cy='4' r='2' />
                  </svg>
                  <span className='text-xs font-medium text-gray-600 group-hover/icon:text-[#27AE60] transition-colors'>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ====== GALLERY SECTION ====== */}
     <section className="py-6">
  <FadeUp>
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </FadeUp>
</section>

      {/* ====== VISION & MISSION SECTION ====== */}
      <section className='py-12 md:py-20 relative overflow-hidden'>
        
        <div className='absolute inset-0 ' />
        <div className='absolute top-10 right-10 w-64 h-64 bg-[#27AE60]/5 rounded-full blur-3xl' />
        <div className='absolute bottom-10 left-10 w-64 h-64 bg-[#F39C12]/5 rounded-full blur-3xl' />

        <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
          {/* Section Header */}
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-[#060E0A]'>
              Vision & <span className='text-[#F39C12]'> Mission</span>
            </h2>
            <div className='relative w-20 h-1 mx-auto mt-6 rounded-full'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#27AE60] to-[#F39C12] rounded-full' />
              <div className='absolute inset-0 bg-gradient-to-r from-[#27AE60] to-[#F39C12] rounded-full animate-ping opacity-30' style={{ animationDuration: '3s' }} />
            </div>
          </div>
            <FadeUp>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
            {/* Vision Card */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30 hover:-translate-y-2'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#27AE60]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-[#F39C12]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100' />
              <div className='absolute inset-0 border border-transparent group-hover:border-[#27AE60]/10 rounded-2xl transition-colors duration-500 pointer-events-none' />

              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                    <Flag className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    
                    <h3 className='font-heading font-bold text-2xl text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Vision</h3>
                  </div>
                </div>
                <p className='text-base leading-relaxed text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                  To become one of Indonesia's leading premium horticultural producers through innovation, quality, and sustainable agriculture.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30 hover:-translate-y-2'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#27AE60]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-[#F39C12]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100' />
              <div className='absolute inset-0 border border-transparent group-hover:border-[#27AE60]/10 rounded-2xl transition-colors duration-500 pointer-events-none' />

              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                    <Target className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    
                    <h3 className='font-heading font-bold text-2xl text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Mission</h3>
                  </div>
                </div>
                <ul className='space-y-3'>
                  {[
                    'Produce premium horticultural products with consistent quality.',
                    'Apply modern greenhouse technology.',
                    'Build long-term partnerships.',
                    'Promote sustainable farming.',
                    'Develop skilled agricultural professionals.',
                  ].map((item, idx) => (
                    <li key={idx} className='flex items-start gap-3 group/item'>
                      <span className='mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#27AE60] to-[#2ecc71] flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300 shrink-0'>
                        <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                        </svg>
                      </span>
                      <span className='text-sm leading-relaxed text-gray-600 group-hover/item:text-[#060E0A] transition-colors duration-300'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </FadeUp>
        </div>
       
      </section>

      {/* ====== CORE VALUES SECTION ====== */}
      <section className='py-20 md:py-28 relative overflow-hidden'>
        <div className='absolute inset-0  opacity-60' />
        
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-[#F39C12]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4' />

        <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <p className='text-xs font-bold uppercase tracking-[0.3em] text-[#27AE60] mb-3'>What We Stand For</p>
            <h2 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-[#060E0A]'>
              Core <span className='text-[#F39C12]'> Values</span>
            </h2>
            <div className='relative w-20 h-1 mx-auto mt-6 rounded-full'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#27AE60] to-[#F39C12] rounded-full' />
              <div className='absolute inset-0 bg-gradient-to-r from-[#27AE60] to-[#F39C12] rounded-full animate-ping opacity-30' style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <FadeUp>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            
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

            {/* Innovation */}
            <div className='group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default border border-gray-100 hover:border-[#27AE60]/30'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:to-[#F39C12]/5 transition-all duration-500' />
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
              <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#27AE60]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500' />
              <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#F39C12]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100' />
              <div className='relative z-10 text-center'>
                <div className='mx-auto w-16 h-16 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-500 mb-5'>
                  <Lightbulb className='w-8 h-8 text-white group-hover:animate-bounce' />
                </div>
                <h3 className='font-heading font-bold text-lg text-[#060E0A] group-hover:text-[#27AE60] transition-colors duration-300'>Innovation</h3>
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
            
          </div></FadeUp>
        </div>
      </section>

      {/* ====== COMPANY MILESTONES SECTION ====== */}
      <section className='py-20 md:py-28 relative overflow-hidden'>
        <div className='absolute inset-0 ' />
        <div className='absolute top-20 right-0 w-[500px] h-[500px] bg-[#27AE60]/3 rounded-full blur-[120px]' />
        <div className='absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#F39C12]/3 rounded-full blur-[120px]' />
        
        <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
          {/* Section Header */}
          <div className='text-center mb-16 md:mb-20'>
            <p className='text-xs font-bold uppercase tracking-[0.3em] text-[#27AE60] mb-3'>Our Journey</p>
            <h2 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-[#060E0A]'>
              Company <span className='text-[#F39C12]'>Milestones</span>
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-[#27AE60] to-[#F39C12] mx-auto mt-6 rounded-full' />
          </div>
          <FadeUp>
          {/* ========== DESKTOP: Horizontal elegant timeline ========== */}
          <div className='hidden md:block'>
            <div className='relative max-w-6xl mx-auto'>
              <div className='grid grid-cols-4 gap-6'>
                {milestoneData.map((m, i) => (
                  <MilestoneCardContent key={i} milestone={m} />
                ))}
              </div>
            </div>
          </div>

          {/* ========== Mobile: Enhanced vertical timeline ========== */}
          <div className='md:hidden max-w-md mx-auto'>
            {milestoneData.map((m, i) => (
              <div key={i} className='relative flex items-start gap-4 mb-8 last:mb-0 group'>
                <div className='flex flex-col items-center shrink-0'>
                  <div className='w-10 h-10 bg-gradient-to-br from-[#27AE60] to-[#2ecc71] rounded-xl flex items-center justify-center shadow-lg shadow-[#27AE60]/25 z-10 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#27AE60]/35 transition-all duration-400'>
                    <Sprout className='w-5 h-5 text-white group-hover:animate-bounce' />
                  </div>
                  {i < milestoneData.length - 1 && (
                    <div className='w-0.5 h-12 bg-gradient-to-b from-[#27AE60]/60 to-[#27AE60]/10 mt-1 relative overflow-hidden'>
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#27AE60]/40 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000' />
                    </div>
                  )}
                </div>
                <div className='flex-1 relative bg-white rounded-xl p-5 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#27AE60]/30 transition-all duration-500 group-hover:-translate-y-1'>
                  <div className='absolute inset-0 bg-gradient-to-br from-[#27AE60]/0 via-[#27AE60]/0 to-[#F39C12]/0 group-hover:from-[#27AE60]/5 group-hover:via-transparent group-hover:to-[#F39C12]/5 transition-all duration-500 rounded-xl' />
                  <div className='absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#27AE60] to-[#F39C12] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
                  <div className='relative z-10'>
                    <span className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#27AE60] bg-[#27AE60]/10 mb-2'>
                      <span className='w-1 h-1 rounded-full bg-[#27AE60] animate-pulse' />
                      {m.year}
                    </span>
                    <p className='text-sm font-medium text-[#060E0A] leading-relaxed group-hover:text-[#27AE60] transition-colors duration-300'>
                      {m.title}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          </FadeUp>
        </div>
        
      </section>
      </React.Fragment>
    </>
  );
}
