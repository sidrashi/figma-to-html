import React from "react";

function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`px-4 relative overflow-hidden ${className}`}>
      <div className="pt-8 lg:pt-16 max-w-300 mx-auto pb-14 relative">
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
