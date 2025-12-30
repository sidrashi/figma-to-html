import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Designhenko shows that they know the art of subtlety.",
    author: "Webflow",
    logo: "Webflow"
  },
  {
    quote: "Design is everything, and these guys have nailed it.",
    author: "Kevin O'Leary",
    role: "Shark Tank",
    avatar: "🦈"
  }
];

const clientLogos = ["Switchboard", "Buy Me A Coffee", "Nectar", "Spotify", "Slack"];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Main Testimonials */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {/* Webflow testimonial */}
          <motion.div 
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "{testimonials[0].quote}"
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.span 
                className="text-xl sm:text-2xl font-bold text-blue-500"
                whileHover={{ scale: 1.2 }}
              >
                W
              </motion.span>
              <span className="text-base sm:text-lg font-semibold">{testimonials[0].author}</span>
            </div>
          </motion.div>

          {/* Kevin O'Leary testimonial */}
          <motion.div 
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "{testimonials[1].quote}"
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-xl sm:text-2xl"
                whileHover={{ rotate: 10 }}
              >
                👨‍💼
              </motion.div>
              <div>
                <p className="font-semibold text-sm sm:text-base">{testimonials[1].author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[1].role}</p>
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
              ease: "linear"
            }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-36 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-card rounded-xl sm:rounded-2xl border border-border flex items-center justify-center"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground">{logo}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Awards Section */}
        <motion.div 
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
                <p className="font-semibold text-sm sm:text-base">Buy Me A Coffee</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Fintech Product of the Year</p>
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
              <span className="text-xs sm:text-sm font-medium text-orange-500">Product Hunt</span>
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
                <p className="font-semibold text-sm sm:text-base">Switchboard</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Remote Work Product of the Year</p>
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
              <span className="text-xs sm:text-sm font-medium text-orange-500">Product Hunt</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
