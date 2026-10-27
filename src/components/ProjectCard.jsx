/**
 * Concept project card with a visual thumbnail area and "Concept project" badge.
 * The `gradient` prop sets the thumbnail background CSS classes.
 * Pass visual content as children for the thumbnail area.
 */
const ProjectCard = ({ title, description, gradient, children }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/80 hover:border-orange/25 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5">
      {/* Visual thumbnail area */}
      <div className={`relative h-56 md:h-64 ${gradient} overflow-hidden`}>
        <span className="absolute top-4 left-4 z-10 bg-navy/70 text-white text-[0.7rem] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 tracking-wide uppercase">
          Concept project
        </span>
        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {children}
        </div>
      </div>

      {/* Card body */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-navy-light mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-navy-light/55 leading-relaxed text-[0.95rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

