import { CheckCircle, ShieldCheck, Award, Users, Truck, Zap } from 'lucide-react';


const features = [
  { icon: ShieldCheck, title: 'Premium Quality', desc: 'Strict quality control at every stage' },
  { icon: Award, title: 'Certified Standards', desc: 'International food safety certifications' },
  { icon: Users, title: 'Expert Team', desc: 'Experienced agricultural professionals' },
  { icon: Zap, title: 'Modern Technology', desc: 'State-of-the-art greenhouse equipment' },
  { icon: Truck, title: 'Timely Delivery', desc: 'Reliable logistics and distribution network' },
  { icon: CheckCircle, title: 'Sustainable Practices', desc: 'Eco-friendly farming methods' },
];

const benefits = [
  { title: 'Direct from Farm', desc: 'Freshness guaranteed straight from our greenhouse to your customers.' },
  { title: 'Bulk Orders Welcome', desc: 'Flexible quantities to meet your business needs and market demand.' },
  { title: 'Certified Quality', desc: 'Meeting international food safety and quality standards.' },
  { title: 'Dedicated Support', desc: 'Personal account manager for every partnership relationship.' },
];

export default function Quality() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">QUALITY ASSURANCE</span>
            <div className="h-1 w-8 bg-primary rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark">
            Quality <span className="text-secondary">Assurance</span>
          </h2>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto">
            At Takumi Greenhouse, we maintain the highest quality standards throughout our production process.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4 md:p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Icon size={18} className="text-primary group-hover:text-white" />
              </div>
              <h4 className="font-semibold text-xs md:text-sm text-text-dark mb-1">{title}</h4>
              <p className="text-[10px] md:text-xs text-text-muted hidden sm:block">{desc}</p>
              <p className="text-[10px] text-text-muted mt-1 sm:hidden">{desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100" style={{ minHeight: '160px' }}>
              <img src={imgMelonHalf} alt="Melon half" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: '160px' }} />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100" style={{ minHeight: '160px' }}>
              <img src={imgMelonSliced} alt="Sliced melon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: '160px' }} />
            </div>
          </div>

          {/* Right: Benefits List */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-dark">
              Why <span className="text-primary">Partners</span> Trust Us
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Our commitment to quality and reliability makes us the preferred partner for businesses across Indonesia.
            </p>
            <div className="space-y-3">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Check className="w-2.5 h-2.5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-text-dark">{title}</h4>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{desc}</p>
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

function Check({ className }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
