import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  "Web design",
  "Logos",
  "Slide decks",
  "Branding",
  "Social media",
  "UI/UX design",
  "Webflow development",
  "Mobile apps",
  "Print design",
  "Email",
  "Display ads",
  "Icons",
  "Brand guides",
  "+ more",
];

const RecentWork = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Recent work
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            We're talking{" "}
            <span className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              "Product of the Year"{" "}
            </span>
            good.
          </h2>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity underline decoration-2 underline-offset-4 text-sm sm:text-base"
            whileHover={{ x: 5 }}
          >
            See recent work
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Services Marquee */}
        <div className="relative py-6 sm:py-8 overflow-hidden mb-10 sm:mb-12 md:mb-16">
          <motion.div
            className="flex gap-2 sm:gap-3 md:gap-4"
            animate={{ x: [0, -800] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...services, ...services, ...services].map((service, index) => (
              <motion.span
                key={index}
                className="flex-shrink-0 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-card rounded-full border border-border text-xs sm:text-sm font-medium whitespace-nowrap"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Work showcase mockup */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Apps, websites, logos & more
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12">
            All the things you need under one roof.
          </p>

          {/* Gradient showcase cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xl md:max-w-3xl mx-auto">
            <motion.div
              className="aspect-square rounded-2xl sm:rounded-3xl card-gradient-1 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl shadow-xl"
                whileHover={{ rotate: 5, scale: 1.05 }}
              />
            </motion.div>
            <motion.div
              className="aspect-square rounded-2xl sm:rounded-3xl card-gradient-3 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl shadow-xl"
                whileHover={{ rotate: -5, scale: 1.05 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWork;
