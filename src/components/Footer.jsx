import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/TakumiLogo.png';

const socialIcons = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
    </svg>
  ),
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  ),
};

const footerNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Our Greenhouse', to: '/greenhouse' },
  { label: 'quality', to: '/quality' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

const footerSections = [
  {
    title: 'Navigation',
    items: footerNavLinks,
  },
  {
    title: 'Contact Us',
    type: 'contact',
    items: [
      { icon: MapPin, text: 'Jl Lakop, Gunung Sugih, Kec. Gunung Sugih, Kabupaten Lampung Tengah, Lampung 34165' },
      { icon: Mail, text: 'Rimbaagronusantara@gmail.com' },
      { icon: Phone, text: '+62 851-2109-8741' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: socialIcons.tiktok, href: 'https://www.tiktok.com/@takumifarm?is_from_webapp=1&sender_device=pc' },
    { icon: socialIcons.instagram, href: 'https://www.instagram.com/takumigreenhouse/' },
    { icon: socialIcons.linkedin, href: 'https://www.linkedin.com/company/pt-rimba-agro-nusantara/' },
    { icon: socialIcons.whatsapp, href: 'https://wa.me/6285121098741' },
  ];

  return (
    <footer className="bg-[#09BE79]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo + Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Takumi Greenhouse Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Premium Melons, <br />
              Grown with Passion and Care
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              PT Rimba Agro Nusantara
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm text-white/60 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm text-white/60 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              {footerSections[1].items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 text-white/80 mt-0.5 shrink-0" />
                    <p className="text-xs text-white/90">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm text-white/60 uppercase tracking-wider">Social Media</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center hover:bg-white/30 transition-colors text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <p className="text-xs text-white/70">
            &copy; {currentYear} Takumi Greenhouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
