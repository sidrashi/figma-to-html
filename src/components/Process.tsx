import { motion, Variants } from "framer-motion";
import feather from "@/assests/brands/feather.svg";
import notionsender from "@/assests/brands/notionsender.svg";
import tapilo from "@/assests/brands/tapilo.svg";
import tweethunter from "@/assests/brands/tweethunter.svg";
import thrivea from "@/assests/brands/thrivea.svg";
import feather_dark from "@/assests/brands/feather-dark.svg";
import tapilo_dark from "@/assests/brands/tapilo-dark.svg";
import thrivea_dark from "@/assests/brands/thrivea-dark.svg";
import tweethunter_dark from "@/assests/brands/tweethunter-dark.svg";

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

  const brands = [
    { name: "feather", light: feather, dark: feather_dark },
    { name: "notionsender", light: notionsender, dark: notionsender },
    { name: "tapilo", light: tapilo, dark: tapilo_dark },
    { name: "tweethunter", light: tweethunter, dark: tweethunter_dark },
    { name: "thrivea", light: thrivea, dark: thrivea_dark },
  ];

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
            Unlimited code, one{" "}
            <span className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              flat monthly{" "}
            </span>
            fee
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
            className="card-gradient-1 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[380px] md:min-h-[400px] flex flex-col justify-center items-center text-center"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-auto flex flex-col justify-center items-center">
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
                Subscribe to a plan & request as many code as you'd like.
              </p>
            </div>

            {/* Mock pricing card */}
            <motion.div
              className="bg-black/80 rounded-xl sm:rounded-2xl p-3 mt-4 sm:mt-6 w-full max-w-[240px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-white/60 mb-1">Monthly club</p>
              <p className="text-xl md:text-2xl font-bold text-white">
                $4,995
                <span className="text-xs sm:text-sm font-normal text-white/60">
                  /month
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2 - Request */}
          <motion.div
            className="card-gradient-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[380px] md:min-h-[400px] flex flex-col justify-center items-center text-center"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="mb-auto flex flex-col justify-center items-center">
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <svg
                  className="w-10 h-10 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z" />
                </svg>
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Request
              </h3>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base max-w-xs">
                Request whatever you'd like, from ui to website.
              </p>
            </div>

            {/* Service tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, staggerChildren: 0.05 }}
            >
              {[
                "Figma → React",
                "Landing Pages",
                "UI Components",
                "Mobile-First Fixes",
                "Custom Animations",
                "Shopify Development",
                "API Plumbing",
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
            className="card-gradient-3 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[380px] md:min-h-[400px] sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center text-center"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="my-auto flex flex-col justify-center items-center">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 text-5xl sm:text-5xl"
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
              <p className="text-white/80 text-sm sm:text-base max-w-xs">
                Receive your code within two business days on average.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Client logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Show in light mode only */}
              <img
                src={brand.light}
                alt={brand.name}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity duration-300 block dark:hidden"
              />
              {/* Show in dark mode only */}
              <img
                src={brand.dark}
                alt={brand.name}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity duration-300 hidden dark:block"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
