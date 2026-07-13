import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 md:py-24 ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">GET IN TOUCH</span>
            <div className="h-1 w-8 bg-primary rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-dark">
            Contact <span className="text-secondary">Us</span>
          </h2>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Have questions or interested in partnering with us? Get in touch with our team.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-gray-50 hover:bg-white focus:bg-white">
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="order">Order Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm resize-none bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information + Map */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100 aspect-[4/3]">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-primary/60 mb-2" />
                  <p className="text-sm text-text-muted font-medium">Interactive Map</p>
                  <p className="text-xs text-text-muted/60 mt-1">Google Maps Integration</p>
                </div>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-text-dark mb-1">Address</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Jl. Raya No. 123<br />
                    Bandung, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-text-dark mb-1">Phone</h4>
                  <p className="text-xs text-text-muted leading-relaxed">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-text-dark mb-1">Email</h4>
                  <p className="text-xs text-text-muted leading-relaxed">info@takumigreenhouse.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-text-dark mb-1">Business Hours</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Monday - Saturday: 08:00 - 17:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
