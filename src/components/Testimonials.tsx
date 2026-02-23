import { motion } from "framer-motion";
import feather from "@/assests/brands/feather.svg";
import notionsender from "@/assests/brands/notionsender.svg";
import tapilo from "@/assests/brands/tapilo.svg";
import tweethunter from "@/assests/brands/tweethunter.svg";
import thrivea from "@/assests/brands/thrivea.svg";
import feather_dark from "@/assests/brands/feather-dark.svg";
import tapilo_dark from "@/assests/brands/tapilo-dark.svg";
import thrivea_dark from "@/assests/brands/thrivea-dark.svg";
import tweethunter_dark from "@/assests/brands/tweethunter-dark.svg";
import client1 from "@/assests/client/client1.webp"
import client2 from "@/assests/client/client2.webp"
import client3 from "@/assests/client/client3.webp"
import client4 from "@/assests/client/client4.webp"

const testimonials = [
  {
    quote:
      "Super fast turnaround and very clean code. I sent a design in the morning and had production-ready files within days. This subscription model honestly saves us so much time.",
    author: "Alex M.",
    role: "SaaS Founder",
    avatar: client1,
  },
  {
    quote:
      "Reliable, consistent, and easy to work with. No chasing freelancers anymore. Everything just gets done, and the quality is always solid.",
    author: "Priya K.",
    role: "Product Manager",
    avatar: client2,
  },
  {
    quote:
      "We use this service as our frontend partner. Designs come back pixel-perfect and organized. It feels like having an in-house developer without the overhead.",
    author: "Mark D.",
    role: "Creative Agency Owner",
    avatar: client3,
  },
  {
    quote:
      "Simple process, quick delivery, and great attention to detail. This completely replaced our old freelance workflow.",
    author: "Daniel R.",
    role: "Indie Maker",
    avatar: client4,
  },
];

const brands = [
  { name: "feather", light: feather, dark: feather_dark },
  { name: "notionsender", light: notionsender, dark: notionsender },
  { name: "tapilo", light: tapilo, dark: tapilo_dark },
  { name: "tweethunter", light: tweethunter, dark: tweethunter_dark },
  { name: "thrivea", light: thrivea, dark: thrivea_dark },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
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
            Testinomials saying
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto lg:text-6xl font-bold">
            Trusted by{" "}
            <span className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transpare">
              founders, startups, and growing
            </span>{" "}
            teams.
          </h2>
        </motion.div>
        {/* Main Testimonials */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {/* First testimonial */}
          <motion.div
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="text-md sm:text-lg md:text-3xl font-extralight mb-6 sm:mb-8 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "{testimonials[0].quote}"
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials[0].author}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {testimonials[0].author}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial */}
          <motion.div
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="text-md sm:text-lg md:text-3xl font-extralight mb-6 sm:mb-8 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "{testimonials[1].quote}"
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <img
                  src={testimonials[1].avatar}
                  alt={testimonials[1].author}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {testimonials[1].author}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonials[1].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third testimonial */}
          <motion.div
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="text-md sm:text-lg md:text-3xl font-extralight mb-6 sm:mb-8 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "{testimonials[2].quote}"
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <img
                  src={testimonials[2].avatar}
                  alt={testimonials[2].author}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {testimonials[2].author}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonials[2].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fourth testimonial */}
          <motion.div
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="text-md sm:text-lg md:text-3xl font-extralight mb-6 sm:mb-8 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "{testimonials[3].quote}"
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <img
                  src={testimonials[3].avatar}
                  alt={testimonials[3].author}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {testimonials[3].author}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonials[3].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logo Marquee */}
        <div className="relative py-6 sm:py-8 overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-8 md:gap-12"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands, ...brands, ...brands].map(
              (brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-36 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-card rounded-xl sm:rounded-2xl border border-border flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "hsl(var(--primary))",
                  }}
                >
                  {/* Show in light mode only */}
                  <img
                    src={brand.light}
                    alt={brand.name}
                    className="h-8 sm:h-10 md:h-12 w-auto object-scale-down px-2 hover:opacity-80 transition-opacity duration-300 block dark:hidden"
                  />
                  {/* Show in dark mode only */}
                  <img
                    src={brand.dark}
                    alt={brand.name}
                    className="h-8 sm:h-10 md:h-12 w-auto object-scale-down px-2 hover:opacity-80 transition-opacity duration-300 hidden dark:block"
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        </div>

        {/* Awards Section */}
        {/* <motion.div
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                ☕
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Buy Me A Coffee
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Fintech Product of the Year
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.span
                className="text-lg sm:text-xl text-orange-500"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆
              </motion.span>
              <span className="text-xs sm:text-sm font-medium text-orange-500">
                Product Hunt
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl text-white"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                S
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Switchboard
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Remote Work Product of the Year
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.span
                className="text-lg sm:text-xl text-orange-500"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                🏆
              </motion.span>
              <span className="text-xs sm:text-sm font-medium text-orange-500">
                Product Hunt
              </span>
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
