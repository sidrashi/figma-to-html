import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  // Parallax only on desktop
  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, isMobile ? 1 : 0]);
  const scale = useTransform(scrollY, [0, 400], [1, isMobile ? 1 : 0.95]);

  return (
    <motion.section
      ref={containerRef}
      className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background blobs — static on mobile */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ y: y1 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Unlimited Figma to Code.{" "}
              </motion.span>
              <motion.span
                className="font-serif italic font-normal bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                One simple monthly subscription.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Pause or cancel anytime. Fast delivery. Clean production ready code.
            </motion.p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:justify-self-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ y: y2 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">

              {/* Floating emojis — animated only on desktop */}
              <motion.div
                className="absolute -top-6 sm:-top-8 right-0 sm:-right-4 flex gap-1 sm:gap-2"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  { size: "w-10 h-10 sm:w-12 sm:h-12", text: "text-xl sm:text-2xl", gradient: "from-orange-400 to-amber-500", shadow: "shadow-orange-500/30", rotate: "rotate-6", delay: 0, duration: 3, distance: -8 },
                  { size: "w-8 h-8 sm:w-10 sm:h-10", text: "text-lg sm:text-xl", gradient: "from-green-400 to-emerald-500", shadow: "shadow-green-500/30", rotate: "-rotate-6", delay: 0.5, duration: 2.5, distance: -6 },
                  { size: "w-12 h-12 sm:w-14 sm:h-14", text: "text-xl sm:text-2xl", gradient: "from-red-400 to-rose-500", shadow: "shadow-red-500/30", rotate: "rotate-12", delay: 0.3, duration: 3.5, distance: -10 },
                ].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className={`${emoji.size} rounded-xl bg-gradient-to-br ${emoji.gradient} flex items-center justify-center ${emoji.text} ${emoji.rotate} shadow-lg ${emoji.shadow}`}
                    animate={isMobile ? {} : { y: [0, emoji.distance, 0] }}
                    transition={{
                      y: { duration: emoji.duration, repeat: Infinity, ease: "easeInOut", delay: emoji.delay },
                    }}
                  >
                    😊
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Card */}
              <motion.div
                className="card-gradient-hero rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
                whileHover={isMobile ? {} : {
                  y: -8,
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Shine effect — desktop only */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-200%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                )}

                {/* Start today badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <motion.span
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium"
                    animate={isMobile ? {} : { scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Start today
                  </motion.span>
                </div>

                <div className="pt-10 sm:pt-12 relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    Join<br />Pixel to Code
                  </h2>
                  <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                    One subscription to rule them all.
                  </p>

                  <motion.a
                    href="#pricing"
                    className="inline-block w-full text-center py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm sm:text-base transition-colors mb-4 sm:mb-6 relative overflow-hidden group"
                    whileHover={isMobile ? {} : { scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">See pricing</span>
                  </motion.a>

                  <motion.a
                    href="#book"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl hover:bg-white/20 transition-colors group"
                    whileHover={isMobile ? {} : { scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xl sm:text-2xl shadow-lg">
                      😊
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base">Book a 15-min intro call</p>
                      <p className="text-xs sm:text-sm text-white/70">Schedule now</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;