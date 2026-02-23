import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import feather from "@/assests/brands/feather.svg";
import notionsender from "@/assests/brands/notionsender.svg";
import tapilo from "@/assests/brands/tapilo.svg";
import tweethunter from "@/assests/brands/tweethunter.svg";
import thrivea from "@/assests/brands/thrivea.svg";
import feather_dark from "@/assests/brands/feather-dark.svg";
import tapilo_dark from "@/assests/brands/tapilo-dark.svg";
import thrivea_dark from "@/assests/brands/thrivea-dark.svg";
import tweethunter_dark from "@/assests/brands/tweethunter-dark.svg";
import client1 from "@/assests/client/client1.webp";
import client2 from "@/assests/client/client2.webp";
import client3 from "@/assests/client/client3.webp";
import client4 from "@/assests/client/client4.webp";

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
  const isMobile = useIsMobile();

  return (
    
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
          >
            <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
              Testimonials saying
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto lg:text-6xl font-bold">
              Trusted by{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                founders, startups, and growing
              </span>{" "}
              teams.
            </h2>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
            {testimonials.slice(0, 4).map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between"
                initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{
                  duration: isMobile ? 0.3 : 0.6,
                  delay: isMobile ? 0 : i * 0.1,
                }}
                whileHover={
                  isMobile ? {} : { y: -5, transition: { duration: 0.3 } }
                }
              >
                {/* plain p */}
                <p className="text-md sm:text-lg md:text-3xl font-extralight mb-6 sm:mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  {/* plain div */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
        </div>
      </section>
  );
};

export default Testimonials;
