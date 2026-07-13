import processSeedSelection from '../assets/seed.jpg';
import processNursery from '../assets/nursery.JPG';
import processTransplanting from '../assets/transplanting.jpg';
import processVegetativeGrowth from '../assets/growth.jpg';
import processPollination from '../assets/pollination.JPG';
import processFruitDevelopment from '../assets/fruit.jpg';
import processHarvest from '../assets/harvest.JPG';
import processGrading from '../assets/grading.jpg';
import processPacking from '../assets/packing.png';
import processDistribution from '../assets/distribution.JPG';
import React from "react";

const processSteps = [
  { step: 1, title: 'Seed Selection', image: processSeedSelection },
  { step: 2, title: 'Nursery', image: processNursery },
  { step: 3, title: 'Transplanting', image: processTransplanting },
  { step: 4, title: 'Vegetative Growth', image: processVegetativeGrowth },
  { step: 5, title: 'Pollination', image: processPollination },
  { step: 6, title: 'Fruit Development', image: processFruitDevelopment },
  { step: 7, title: 'Harvest', image: processHarvest },
  { step: 8, title: 'Grading', image: processGrading },
  { step: 9, title: 'Packing', image: processPacking },
  { step: 10, title: 'Distribution', image: processDistribution },
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
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ProcessCard({ stepData, index }) {
  const { ref, inView } = useInView();
  const { step, title, image } = stepData;

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(.95)",
        transition: `all .7s ease ${index * 80}ms`,
      }}
    >
      <div className="relative rounded-lg overflow-hidden shadow-md mb-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">

        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#27AE60] flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">
            {step}
          </span>
        </div>

      </div>

      <div className="bg-[#27AE60] rounded-md px-2 py-2 text-center">
        <p className="text-[11px] font-bold text-white">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function ProductionProcess() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F39C12]">PRODUCTION </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#27AE60]">PROCESS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-text-dark">
            Production Process
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {processSteps.map((stepData, index) => (
    <ProcessCard
        key={stepData.step}
        stepData={stepData}
        index={index}
    />
))}
          </div>
        </div>
      </div>
    </section>
  );
}
