
export default function PartnerCTA() {
  return (
    <section  className="relative py-20 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative flex flex-col items-center">
          {/* Left decorative melon image */}
          {/* <div className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white z-10 hidden sm:block">
            <img src={imgMelonSlice} alt="Fresh melon" className="w-full h-full object-cover" />
          </div> */}

          {/* Center content */}
          <div className="text-center mb-8 md:mb-0">
            <h2 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-text-dark mb-2">
              Ready to Partner{' '}
              <span className="text-[#F39C12]">with Us?</span>
            </h2>
            <p className="text-xs md:text-sm text-text-muted max-w-lg mx-auto leading-relaxed">
              Contact our team to discuss business opportunities
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold text-sm px-8 py-2.5 rounded-md transition-colors shadow-md mt-4"
            >
              Contact us
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}
