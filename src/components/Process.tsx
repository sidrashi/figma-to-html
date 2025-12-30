import { motion, Variants } from "framer-motion";

const Process = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The way design{" "}
            <span className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              should've
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>been done in the first place
          </h2>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Card 1 - Subscribe */}
          <motion.div
            className="card-gradient-1 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[380px] md:min-h-[400px] flex flex-col"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-auto">
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Subscribe
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Subscribe to a plan & request as many designs as you'd like.
              </p>
            </div>

            {/* Mock pricing card */}
            <motion.div
              className="bg-black/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 mt-4 sm:mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-white/60 mb-1">Monthly club</p>
              <p className="text-xl sm:text-2xl font-bold text-white">
                $4,995
                <span className="text-xs sm:text-sm font-normal text-white/60">
                  /month
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2 - Request */}
          <motion.div
            className="card-gradient-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[380px] md:min-h-[400px] flex flex-col"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Request
              </h3>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Request whatever you'd like, from mobile apps to logos.
              </p>
            </div>

            {/* Service tags */}
            <motion.div
              className="flex flex-wrap gap-1.5 sm:gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, staggerChildren: 0.05 }}
            >
              {[
                "Presentations",
                "Logos",
                "Social Media",
                "Print design",
                "Ad creative",
                "Email",
                "Packaging",
              ].map((service, i) => (
                <motion.span
                  key={service}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Card 3 - Receive */}
          <motion.div
            className="card-gradient-3 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[380px] md:min-h-[400px] flex flex-col sm:col-span-2 md:col-span-1"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-auto">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 text-4xl sm:text-5xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                😊
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Receive
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Receive your design within two business days on average.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Client logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {["Nectar", "BMC", "Spotify", "Slack", "Adobe"].map((brand, i) => (
            <motion.span
              key={brand}
              className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
