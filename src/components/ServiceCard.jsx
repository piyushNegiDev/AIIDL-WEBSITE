/**
 * Service summary card used on the homepage.
 * Receives a Lucide icon component, title, and description.
 */
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 md:p-10 border border-cream-dark/80 hover:border-orange/25 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/15 transition-colors duration-300">
        <Icon className="w-6 h-6 text-orange" strokeWidth={1.8} />
      </div>
      <h3 className="text-xl font-bold text-navy-light mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-navy-light/55 leading-relaxed text-[0.95rem]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

