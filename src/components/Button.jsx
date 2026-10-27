import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-orange hover:bg-orange-hover text-white shadow-lg shadow-orange/20 hover:shadow-orange/30",
  secondary:
    "border-2 border-orange text-orange hover:bg-orange hover:text-white",
  outline:
    "border-2 border-white/25 text-white hover:border-white/60 hover:bg-white/10",
};

/**
 * Polymorphic button — renders a React Router <Link> when `to` is provided,
 * otherwise a native <button>. Supports primary, secondary, and outline variants.
 */
const Button = ({
  to,
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const base = [
    "inline-flex items-center justify-center gap-2",
    "px-7 py-3.5 rounded-xl font-semibold text-sm",
    "transition-all duration-200 cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
  ].join(" ");

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;

