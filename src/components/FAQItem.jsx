import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Accessible accordion FAQ item.
 * Uses native <button> semantics (keyboard Enter/Space handled automatically).
 * Includes aria-expanded, aria-controls, and role="region" for screen readers.
 */
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-navy-light hover:text-orange transition-colors duration-200 cursor-pointer"
        >
          <span>{question}</span>
          <ChevronDown
            className={`w-5 h-5 shrink-0 text-navy-light/40 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="pb-6 pr-10"
        >
          <p className="text-navy-light/60 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;

