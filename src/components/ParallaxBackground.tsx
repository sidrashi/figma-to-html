import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -30]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-20 blur-3xl"
        style={{ 
          y: y1, 
          rotate: rotate1,
          scale,
          background: "radial-gradient(circle, hsl(280 80% 65% / 0.5) 0%, transparent 70%)"
        }}
      />
      
      {/* Medium gradient orb - left */}
      <motion.div
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-15 blur-3xl"
        style={{ 
          y: y2, 
          rotate: rotate2,
          background: "radial-gradient(circle, hsl(45 100% 60% / 0.5) 0%, transparent 70%)"
        }}
      />
      
      {/* Small gradient orb - bottom right */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{ 
          y: y3,
          background: "radial-gradient(circle, hsl(320 80% 60% / 0.4) 0%, transparent 70%)"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
