import {
  LayoutGrid,
  DollarSign,
  Zap,
  Star,
  Maximize2,
  Fingerprint,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const benefits = [
  {
    icon: LayoutGrid,
    title: "Design board",
    description: "Easily manage your code queue with a Trello board.",
  },
  {
    icon: DollarSign,
    title: "Fixed monthly rate",
    description: "No surprises here! Pay the same fixed price each month.",
  },
  {
    icon: Zap,
    title: "Fast delivery",
    description:
      "Get your code one at a time in just a couple days on average.",
  },
  {
    icon: Star,
    title: "Top-notch quality",
    description:
      "Senior code quality at your fingertips, whenever you need it.",
  },
  {
    icon: Maximize2,
    title: "Flexible and scalable",
    description: "Scale up or down as needed, and pause or cancel at anytime.",
  },
  {
    icon: Fingerprint,
    title: "Unique and all yours",
    description: "Every code is made especially for you and is 100% yours.",
  },
];

const Benefits = () => {
  const isMobile = useIsMobile();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1, 
        delayChildren: isMobile ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
            Membership benefits
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto lg:text-6xl font-bold">
            Once you{" "}
            <span className="font-serif italic font-normal bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              try it, there's no turning
            </span>{" "}
            back.
          </h2>
        </motion.div>

        <p className="text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
          We replace unreliable freelancers and expensive agencies with one flat
          monthly fee delivering high-quality development so fast, you won't
          look anywhere else.
        </p>

        {/* Benefits Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="feature-card"
              variants={itemVariants}
              whileHover={
                isMobile ? {} : { y: -5, transition: { duration: 0.3 } }
              }
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
