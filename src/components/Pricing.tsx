import { Check, PauseCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic / Starter Plan",
    price: "$59 - $79",
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      { text: "1 request at a time" },
      { text: "Figma → HTML OR basic React or Shopify development" },
      { text: "Responsive design (mobile + desktop)" },
      { text: "Clean, semantic HTML / Tailwind / CSS" },
      { text: "Delivery in 3-5 business days" },
      { text: "1 revision per task" },
      { text: "Email / WhatsApp support" },
      { text: "No complex animations" },
      { text: "No backend / API" },
    ],
  },
  {
    name: "Pro Plan",
    price: "$149 - $189",
    period: "/month",
    description: "For startups, agencies & SaaS teams",
    features: [
      { text: "1-2 active requests" },
      {
        text: "Figma → HTML or React (Next.js optional) or Custom Shopify development",
      },
      { text: "Tailwind / SCSS support" },
      { text: "Reusable components" },
      { text: "Basic animations (Framer Motion)" },
      { text: "Delivery in 1-3 business days" },
      { text: "Unlimited revisions" },
      { text: "Priority support (WhatsApp + Email)" },
      { text: "Landing Pages / Dashboards / Multi-page website" },
    ],
  },
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
            <span className="font-serif italic font-normal text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              endless
            </span>{" "}
            possibilities
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <motion.span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium text-sm sm:text-base">
              Start today
            </span>
          </div>
        </motion.div>

        <div className="mx-auto grid sm:grid-cols-2 gap-8 sm:gap-6">
          {/* Pricing Card */}
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Popular badge on Pro plan */}
              {i === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              {/* Header */}
              <motion.div
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{plan.name} </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                    {plan.description}
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
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-lg sm:text-xl">
                  {plan.period}
                </span>
              </motion.div>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature.text}
                    className="flex items-center gap-2.5 sm:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-background" />
                    </motion.div>
                    <span className="text-sm sm:text-base">{feature.text}</span>
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
          ))}
        </div>
        <div className="max-w-lg mx-auto">
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
                <span className="font-semibold text-sm sm:text-base">
                  Pause anytime
                </span>
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
                <span className="font-semibold text-sm sm:text-base">
                  Try it for a week
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Not loving it after a week? Get 75% back, no questions asked.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
