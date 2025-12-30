import { Check, PauseCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "One request at a time",
  "Avg. 48 hour delivery",
  "Unlimited brands",
  "Webflow development",
  "Unlimited stock photos",
  "Up to 2 users",
  "Pause or cancel anytime"
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
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
            PRICING
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto lg:text-6xl font-bold mb-6 sm:mb-8">
            One subscription,{" "}
            <span className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">endless</span> possibilities
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <motion.span 
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium text-sm sm:text-base">Start today</span>
          </div>
        </motion.div>

        <div className="max-w-lg mx-auto">
          {/* Pricing Card */}
          <motion.div 
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Header */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl card-gradient-1 flex items-center justify-center text-xl sm:text-2xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                😊
              </motion.div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Monthly Club</h3>
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                  Pause or cancel anytime
                </p>
              </div>
            </motion.div>

            {/* Price */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold">$5,995</span>
              <span className="text-muted-foreground text-lg sm:text-xl">/month</span>
            </motion.div>

            {/* Features */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={feature} 
                  className="flex items-center gap-2.5 sm:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.div 
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-background" />
                  </motion.div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a 
              href="#"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 bg-accent text-accent-foreground rounded-full font-semibold text-base sm:text-lg hover:brightness-95 transition-all shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="text-xl sm:text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                😊
              </motion.span>
              Join today
            </motion.a>
          </motion.div>

          {/* Additional info cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <PauseCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <span className="font-semibold text-sm sm:text-base">Pause anytime</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Temporarily pause your subscription anytime, no sweat.
              </p>
            </motion.div>

            <motion.div 
              className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="font-semibold text-sm sm:text-base">Try it for a week</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Not loving it after a week? Get 75% back, no questions asked.
              </p>
            </motion.div>
          </motion.div>

          {/* Client logos */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 opacity-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {["Nectar", "BMC", "Spotify", "Slack", "Adobe"].map((brand, i) => (
              <motion.span 
                key={brand} 
                className="text-xs sm:text-sm font-semibold text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
