import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Menu, X, Mail, Phone, MapPin, Map, Building2, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/TakumiLogo.png';
import hero1 from '../assets/hero1.png';
import Footer from '../components/Footer';
import React from 'react';
import Whatsapp from '../assets/wa.png';
import TikTok from '../assets/tiktok.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

/* ── reusable hook ── */
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

/* ── animation wrapper ── */
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

/* ── navigation ── */
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/greenhouse', label: 'Our Greenhouse' },
  { href: '/quality', label: 'Quality' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

/* ── transparent header bar ── */
function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/80">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12 h-16 md:h-[70px]">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Takumi" className="h-8 md:h-11 w-auto" />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  location.pathname === href
                    ? 'text-[#F39C12]'
                    : 'text-text-dark hover:text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-text-dark hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm pt-20">
          <div className="pt-6 px-6 pb-6">
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
                        : 'text-text-dark hover:text-primary hover:bg-gray-50'
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

/* ── WhatsApp icon (simple green) ── */
function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <img
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      src={Whatsapp}
    >
      
    </img>
  );
}

/* ── TikTok icon ── */
function TikTokIcon({ size = 20, className = '' }) {
  return (
    <img
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      src={TikTok}
    >
    </img>
  );
}

/* ── Instagram icon (copy from Footer) ── */
function InstagramIcon({ size = 14 }) {
  return (
    <img
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      src={instagram}
    >
      
    </img>
  );
}

/* ── contact data ── */
const contactItems = [
  { icon: Building2, label: 'Company', value: 'Takumi Farm' },
  { icon: Mail, label: 'Email', value: 'Rimbaagronusantara@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+62 851-2109-8741' },
  { icon: null, label: 'WhatsApp', value: '+62 851-2109-8741', customIcon: true },
  { icon: null, label: 'Instagram', value: 'takumigreenhouse', customIcon: true },
  { icon: null, label: 'Tiktok', value: '@takumifarm', customIcon: true },
  { icon: null, label: 'Linkedin', value: 'Takumi Greenhouse', customIcon: true },
  { icon: MapPin, label: 'Address', value: 'Jl Lakop, Gunung Sugih, Kec. Gunung Sugih, Kabupaten Lampung Tengah, Lampung 34165' },
  { icon: Map, label: 'Google Maps', value: 'https://www.google.com/maps/place/Takumi+Farm/@-4.999033,105.209882,12z/data=!4m6!3m5!1s0x2e40af003af874d3:0x49e8d001f5d9f6ad!8m2!3d-4.9990331!4d105.2098821!16s%2Fg%2F11xrl2nzm1?hl=id&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D', isLink: true },
];

/* ── contact info card ── */
function ContactCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Card header */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-lg font-heading font-bold text-secondary">Contact Information</h2>
        <div className="h-0.5 w-16 bg-secondary rounded-full mt-1" />
      </div>

      {/* Contact list */}
      <div className="px-6 pb-4">
        <div className="space-y-3">
          {contactItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <a
                key={idx}
                href={item.isLink ? item.value : undefined}
                target={item.isLink ? '_blank' : undefined}
                rel={item.isLink ? 'noopener noreferrer' : undefined}
                className={`flex items-start gap-3 p-3 rounded-xl transition-colors w-full ${
                  item.isLink ? 'hover:bg-gray-50 cursor-pointer' : ''
                }`}
              >
                {/* Icon circle */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.customIcon && item.label === 'WhatsApp' && (
                    <WhatsAppIcon size={18} />
                  )}
                  {item.customIcon && item.label === 'Instagram' && (
                    <InstagramIcon size={18} />
                  )}
                  {item.customIcon && item.label === 'Tiktok' && (
                    <TikTokIcon size={18} />
                  )}
                  {item.customIcon && item.label === 'Linkedin' && (
                    <img src={linkedin} alt="LinkedIn" width={18} height={18} />
                  )}
                  {!item.customIcon && IconComp && <IconComp size={18} className="text-primary" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-xs font-semibold text-text-dark uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm text-text-body leading-relaxed break-words whitespace-normal">
                    {item.isLink ? 'Open in Google Maps' : item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="px-6 pb-6">
        <div className="rounded-xl overflow-hidden border border-gray-200">
          <iframe
            title="Takumi Greenhouse Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31797.893732071447!2d105.19253620504641!3d-4.98335392954023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40af003af874d3%3A0x49e8d001f5d9f6ad!2sTakumi%20Farm!5e0!3m2!1sid!2sid!4v1783515884184!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

/* ── inquiry form card ── */
function InquiryFormCard() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_vou4rq9',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_y5bk2bm',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'Rimbaagronusantara@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FiuwbIBh1nylOmRfg',
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', company: '', email: '', message: '' });
      }, 3000);
    } catch {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[fieldName]
        ? 'border-red-400 ring-2 ring-red-100'
        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
    } outline-none transition-all text-sm bg-gray-50 hover:bg-white focus:bg-white text-text-dark placeholder:text-text-muted`;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 h-full flex flex-col">
      {/* Card header */}
      <div className="mb-6">
        <h2 className="text-lg font-heading font-bold text-secondary">Form</h2>
        <div className="h-0.5 w-16 bg-secondary rounded-full mt-1" />
      </div>

      {/* Success message */}
      {submitted && (
        <div className="mb-4 p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <Send size={16} className="text-white" />
          </div>
          <p className="text-sm font-semibold text-primary">submitted successfully!</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses('name')}
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className={inputClasses('company')}
              placeholder="Your company"
            />
            {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses('email')}
              placeholder="Your email"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses('message')} resize-none`}
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit 
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

/* ── main page ── */
export default function ContactPage() {
  const heroData = useInView(0.05);

  return (
    <React.Fragment>
      

      {/* Hero banner */}
      <section className="relative h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden bg-[#060E0A]">
        <div className="absolute inset-0">
          <img
            src={hero1}
            alt="Contact Us — Takumi Greenhouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div
            ref={heroData.ref}
            className="max-w-xl transition-all duration-1000"
            style={{
              opacity: heroData.inView ? 1 : 0,
              transform: heroData.inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
            }}
          >
            {/* Accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary rounded-full mx-auto mb-4" />

            {/* Breadcrumb heading */}
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3">
              Contact <span className="text-secondary">Us</span>
            </h1>

            {/* Bottom divider */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-secondary/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Main content — two column */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F7FAF6 50%, #E8F5E9 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Information */}
            <FadeUp>
              <div className="relative whitespace-pre-line">
               

                <ContactCard />
              </div>
            </FadeUp>

            {/* Right: Inquiry Form */}
            <FadeUp delay="delay-200">
              <InquiryFormCard />
            </FadeUp>
          </div>
        </div>
      </section>

      
    </React.Fragment>
  );
}
