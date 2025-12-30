import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className = "", id, ...props }: SectionWrapperProps) => (
  <motion.section
    id={id}
    className={`py-16 md:py-24 px-4 sm:px-6 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={fadeIn}
    {...props}
  >
    {children}
  </motion.section>
);

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export const StaggerContainer = ({ children, className = "" }: StaggerContainerProps) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
  >
    {children}
  </motion.div>
);

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "", ...props }: StaggerItemProps) => (
  <motion.div className={className} variants={staggerItem} {...props}>
    {children}
  </motion.div>
);

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export const AnimatedCard = ({ children, className = "", ...props }: AnimatedCardProps) => (
  <motion.div
    className={`bg-card rounded-2xl p-6 border border-border/50 ${className}`}
    whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)" }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    {...props}
  >
    {children}
  </motion.div>
);

interface GradientButtonProps extends HTMLMotionProps<"a"> {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export const GradientButton = ({ 
  children, 
  href, 
  className = "", 
  variant = "primary",
  ...props 
}: GradientButtonProps) => (
  <motion.a
    href={href}
    className={`
      inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold 
      relative overflow-hidden group
      ${variant === "primary" 
        ? "bg-primary text-primary-foreground" 
        : "bg-secondary text-secondary-foreground border border-border"
      }
      ${className}
    `}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {variant === "primary" && (
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
    )}
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  </motion.a>
);
