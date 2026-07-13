import { Briefcase, MapPin, Clock } from 'lucide-react';

const openings = [
  { title: 'Greenhouse Technician', location: 'Bandung', type: 'Full-time', department: 'Operations' },
  { title: 'Agricultural Specialist', location: 'Bandung', type: 'Full-time', department: 'Research' },
  { title: 'Quality Control Inspector', location: 'Bandung', type: 'Full-time', department: 'Quality' },
  { title: 'Sales Representative', location: 'Jakarta', type: 'Contract', department: 'Sales' },
];

export default function Careers() {
  return (
    <section className="py-20 md:py-24 ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-8 bg-secondary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">JOIN OUR TEAM</span>
            <div className="h-1 w-8 bg-secondary rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark">
            Career <span className="text-primary">Opportunities</span>
          </h2>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto">
            Join our passionate team and help us grow the finest melons in Indonesia.
          </p>
        </div>

        {/* Job Listings */}
        <div className="max-w-2xl mx-auto space-y-3">
          {openings.map(({ title, location, type, department }) => (
            <div key={title} className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-primary shrink-0" />
                    <h3 className="font-heading font-bold text-sm text-text-dark group-hover:text-primary transition-colors">{title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {type}
                    </span>
                    <span className="bg-primary/10 text-primary font-medium px-2.5 py-0.5 rounded-full">
                      {department}
                    </span>
                  </div>
                </div>
                <button className="shrink-0 bg-primary hover:bg-primary-dark text-white text-[10px] font-semibold px-3 py-1.5 rounded-md transition-colors shadow-sm">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-text-muted">
            Don't see a role that fits?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact us
            </a>{' '}
            to learn more about opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
