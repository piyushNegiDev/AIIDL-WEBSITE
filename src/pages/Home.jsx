import {
  Code,
  Globe,
  Cloud,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import healthDashImage from "../assets/health.png";
import ecomDashImage from "../assets/ecom.png";

/* ───────────────────────────────────────────────
   HOMEPAGE
   ─────────────────────────────────────────────── */

const Home = () => {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        {/* Decorative background radial highlights */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: [
              "radial-gradient(ellipse 55% 45% at 75% 35%, rgba(232,113,58,0.12) 0%, transparent 70%)",
              "radial-gradient(ellipse 40% 50% at 15% 70%, rgba(232,113,58,0.05) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Copy & Actions */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 w-fit mb-5">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <span className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-orange">
                  AIIDL Technologies
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight mb-5">
                Engineering Software <br className="hidden sm:inline" />
                That <span className="text-orange">Moves Business Forward</span>
              </h1>

              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                We partner with ambitious teams to design, build, and scale
                custom digital products — from robust enterprise platforms to
                resilient cloud infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <Button to="/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/services/custom-software" variant="outline">
                  Our Services
                </Button>
              </div>

              {/* Key Competency Badges */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange shrink-0" />
                  <span className="text-xs text-white/60 font-medium">
                    Enterprise Security
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-orange shrink-0" />
                  <span className="text-xs text-white/60 font-medium">
                    High Performance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-orange shrink-0" />
                  <span className="text-xs text-white/60 font-medium">
                    Cloud Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom CSS Software Dashboard Visual */}
            <div className="lg:col-span-6 xl:col-span-6 w-full">
              <DashboardVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="What We Do"
            title="Solutions built for scale"
            subtitle="From concept to deployment, we deliver software that solves real problems and grows with your organization."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={Code}
              title="Custom Software"
              description="Purpose-built applications tailored to your workflows, designed for speed and built to evolve with your business."
            />
            <ServiceCard
              icon={Globe}
              title="Web & Mobile Applications"
              description="Responsive web platforms and native mobile experiences that engage users and deliver measurable business outcomes."
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud & DevOps"
              description="Resilient cloud architecture and automated pipelines that keep your applications reliable, secure, and fast."
            />
          </div>
          <div className="text-center mt-10 md:mt-14">
            <Button to="/services/custom-software" variant="secondary">
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CONCEPT PROJECTS ─────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Work"
            title="Concept projects"
            subtitle="Illustrative examples of our approach. These are concept projects created to demonstrate capability — not real client work."
          />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ProjectCard
              title="E-Commerce Platform Redesign"
              description="A concept for a high-performance shopping experience with real-time inventory, personalized recommendations, and streamlined checkout."
              gradient="bg-gradient-to-br from-[#0d1f38] via-navy to-[#163352]"
            >
              <img src={ecomDashImage} alt="E-Commerce Platform Redesign" />
            </ProjectCard>
            <ProjectCard
              title="Health Data Dashboard"
              description="A concept for a clinical data visualization platform with role-based access, compliance-ready reporting, and trend analysis."
              gradient="bg-gradient-to-br from-navy via-[#112240] to-[#0d2a3f]"
            >
              <img src={healthDashImage} alt="Health Data Dashboard" />
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────── */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden border-t border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(232,113,58,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            light
            label="Ready to Start?"
            title="Let's build something great together"
            subtitle="Tell us about your project and we'll get back to you with a clear roadmap."
          />
          <Button to="/contact">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  );
};

/* ───────────────────────────────────────────────
   HERO DASHBOARD VISUAL
   Custom CSS-built software platform telemetry panel
   ─────────────────────────────────────────────── */

const DashboardVisual = () => (
  <div className="relative" aria-hidden="true">
    {/* Ambient backlight glow */}
    <div className="absolute -inset-2 bg-gradient-to-tr from-orange/20 to-orange/5 blur-2xl rounded-3xl opacity-70" />

    <div className="relative bg-[#0d1726]/95 border border-white/12 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs font-semibold text-white/50 tracking-wide">
            aiidl-cloud-console
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[0.68rem] text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          System Active • 99.98%
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
            <span className="text-[0.65rem] uppercase font-semibold text-white/40 tracking-wider block mb-1">
              Throughput
            </span>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">
              14.2k{" "}
              <span className="text-[0.68rem] font-normal text-white/50">
                req/s
              </span>
            </div>
            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-orange rounded-full w-4/5" />
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
            <span className="text-[0.65rem] uppercase font-semibold text-white/40 tracking-wider block mb-1">
              Avg Latency
            </span>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">
              18{" "}
              <span className="text-[0.68rem] font-normal text-white/50">
                ms
              </span>
            </div>
            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-3/5" />
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
            <span className="text-[0.65rem] uppercase font-semibold text-white/40 tracking-wider block mb-1">
              Services
            </span>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">
              24/24{" "}
              <span className="text-[0.68rem] font-normal text-emerald-400">
                ok
              </span>
            </div>
            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-sky-400 rounded-full w-full" />
            </div>
          </div>
        </div>

        {/* Real-time Telemetry / Performance Graph */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-orange" />
              <span className="text-xs font-semibold text-white/75">
                Load & Response Distribution
              </span>
            </div>
            <span className="text-[0.68rem] text-white/40">
              Real-time Telemetry
            </span>
          </div>

          {/* Bar Chart with Orange Gradient Accent */}
          <div className="flex items-end gap-1.5 h-16 pt-2">
            {[45, 68, 52, 85, 60, 92, 74, 88, 64, 96, 78, 90, 82, 94].map(
              (height, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-sm bg-gradient-to-t from-orange/20 via-orange/60 to-orange/90 transition-all duration-300"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
        </div>

        {/* Live Build & Deployment Pipeline Status */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60 mb-1">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-white/40" />
              <span className="font-mono text-[0.72rem] text-white/70">
                pipeline:release-prod
              </span>
            </div>
            <span className="text-[0.65rem] text-emerald-400 font-medium">
              Passed • 42s
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { step: "01. Unit & E2E Tests", status: "100% Passed" },
              { step: "02. Container Build", status: "Zero Vulns" },
              { step: "03. Kubernetes Deploy", status: "Rolling Sync" },
            ].map(({ step, status }) => (
              <div
                key={step}
                className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-2 flex flex-col justify-between"
              >
                <div className="text-[0.62rem] text-white/45 font-medium truncate">
                  {step}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-[0.65rem] text-white/70 font-semibold">
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
