import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  
  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section 
      ref={containerRef}
      className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
        style={{ x: useTransform(springX, v => -v * 1.5), y: useTransform(springY, v => -v * 1.5) }}
      />
      
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Unlimited Figma to Code.{" "}
              </motion.span>
              <motion.span 
                className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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

            {/* Eye-catching CTA */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.a
                href="#pricing"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Card with parallax */}
          <motion.div 
            className="lg:justify-self-end"
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ y: y2 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0 perspective-1000">
              {/* Floating smileys decoration with enhanced parallax */}
              <motion.div 
                className="absolute -top-6 sm:-top-8 right-0 sm:-right-4 flex gap-1 sm:gap-2"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ x: springX, y: useTransform(springY, v => v * 2) }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-xl sm:text-2xl rotate-6 shadow-lg shadow-orange-500/30"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                >
                  😊
                </motion.div>
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-lg sm:text-xl -rotate-6 shadow-lg shadow-green-500/30"
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                >
                  😊
                </motion.div>
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center text-xl sm:text-2xl rotate-12 shadow-lg shadow-red-500/30"
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}
                >
                  😊
                </motion.div>
              </motion.div>

              {/* Main Card with 3D effect */}
              <motion.div 
                className="card-gradient-hero rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  rotateX: 2, 
                  rotateY: -2,
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-200%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                
                {/* Start today button */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <motion.span 
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium"
                    animate={{ scale: [1, 1.02, 1] }}
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">See pricing</span>
                  </motion.a>

                  <motion.a
                    href="#book"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl hover:bg-white/20 transition-colors group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xl sm:text-2xl shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      😊
                    </motion.div>
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
