import {
  ArrowRight,
  FileText,
  Layers,
  Zap,
  LifeBuoy,
  Search,
  Code,
  Rocket,
} from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import FAQItem from "../components/FAQItem";

/* ───────────────────────────────────────────────
   SERVICE DETAIL — Custom Software Development
   ─────────────────────────────────────────────── */

const deliverables = [
  {
    icon: FileText,
    title: "Requirements Analysis & Specification",
    description:
      "We start by understanding your goals, constraints, and users — then translate that into a clear technical specification that guides every decision.",
  },
  {
    icon: Layers,
    title: "Architecture Design & Prototyping",
    description:
      "We design scalable system architectures and build interactive prototypes so you can validate ideas before committing to full development.",
  },
  {
    icon: Zap,
    title: "Full-Stack Development & Integration",
    description:
      "Our engineers build robust front-end and back-end systems, connecting APIs, databases, and third-party services into a cohesive product.",
  },
  {
    icon: LifeBuoy,
    title: "Testing, Deployment & Support",
    description:
      "We thoroughly test every release, handle deployment, and provide ongoing support to keep your software running smoothly.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Planning",
    description:
      "We listen carefully, research your domain, and define clear project scope and milestones. This phase ensures alignment before any code is written.",
  },
  {
    number: "02",
    icon: Code,
    title: "Design & Development",
    description:
      "Iterative development with regular check-ins. You see working software at each milestone, not just a final reveal. Feedback is built into the process.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Evolve",
    description:
      "We deploy with confidence, monitor performance, and iterate based on real usage. Software is never finished — we help it improve continuously.",
  },
];

const faqs = [
  {
    id: "timeline",
    question: "How long does a typical custom software project take?",
    answer:
      "Timeline varies based on scope and complexity. A focused MVP might take 8–12 weeks, while a comprehensive enterprise platform could take several months. After our discovery phase, we provide a detailed project timeline with clear milestones so there are no surprises.",
  },
  {
    id: "technologies",
    question: "What technologies do you work with?",
    answer:
      "We select the best tools for each project rather than forcing a one-size-fits-all stack. Our team has deep experience with React, Node.js, Python, Go, cloud platforms like AWS and GCP, and modern DevOps practices. We always prioritize proven, maintainable technologies.",
  },
  {
    id: "support",
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. We offer ongoing maintenance, monitoring, and iterative improvement packages. Our goal is a long-term partnership — we want your software to keep delivering value well beyond the initial launch.",
  },
];

const ServiceDetail = () => {
  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 60%, rgba(232,113,58,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-block text-[0.7rem] font-bold tracking-[0.25em] uppercase text-orange/90 mb-5">
            Our Services
          </span>
          <h1 className="text-[2rem] md:text-[2.75rem] lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
            Custom Software Development
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Purpose-built software for organizations that have outgrown
            off-the-shelf tools. We help growing businesses, specialized teams,
            and enterprises turn complex requirements into reliable digital
            products.
          </p>
          <Button to="/contact">
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ─── WHO IT HELPS ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Who This Is For"
            title="Built for teams with complex needs"
            subtitle="Custom software makes sense when your business has unique processes that generic tools can't support."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                emoji: "🚀",
                title: "Growing Businesses",
                text: "You've outgrown spreadsheets and manual workflows. You need software that fits how your team actually works.",
              },
              {
                emoji: "🔧",
                title: "Specialized Operations",
                text: "Your processes are unique to your industry. Off-the-shelf tools force workarounds — custom software eliminates them.",
              },
              {
                emoji: "🏢",
                title: "Enterprise Teams",
                text: "You need systems that integrate with existing infrastructure, meet compliance requirements, and scale with your organization.",
              },
            ].map(({ emoji, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-cream-dark/80"
              >
                <span
                  className="text-3xl mb-5 block"
                  role="img"
                  aria-hidden="true"
                >
                  {emoji}
                </span>
                <h3 className="text-lg font-bold text-navy-light mb-2 tracking-tight">
                  {title}
                </h3>
                <p className="text-navy-light/55 leading-relaxed text-[0.95rem]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DELIVERABLES ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Deliverables"
            title="What we deliver"
            subtitle="Every engagement produces tangible, well-documented outputs — not just code."
          />
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {deliverables.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 p-6 md:p-8 rounded-2xl border border-cream-dark/80 bg-cream/50"
              >
                <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-orange" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-light mb-1.5 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-navy-light/55 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THREE-STEP PROCESS ───────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Process"
            title="Three steps to launch"
            subtitle="A proven, transparent process that keeps you informed and in control at every stage."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {processSteps.map(
              ({ number, icon: Icon, title, description }) => (
                <div key={number} className="relative">
                  {/* Connector line (visible on md+ between cards) */}
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-cream-dark last:hidden" />

                  <div className="bg-white rounded-2xl p-8 border border-cream-dark/80 h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-3xl font-extrabold text-orange/20 leading-none tracking-tighter">
                        {number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                        <Icon
                          className="w-5 h-5 text-orange"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-navy-light mb-2 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-navy-light/55 text-[0.95rem] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── FAQs ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            label="Questions"
            title="Frequently asked questions"
          />
          <div className="border-t border-cream-dark">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────── */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(232,113,58,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            light
            label="Next Step"
            title="Ready to discuss your project?"
            subtitle="Tell us what you're building. We'll share how we can help and outline a clear path forward."
          />
          <Button to="/contact">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;

