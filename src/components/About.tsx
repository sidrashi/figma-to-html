import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          First launched in 2017, Designhenko revolutionized the design industry with its 
          subscription-based model. To this day, Designhenko is run entirely by{" "}
          <motion.a 
            href="#" 
            className="text-foreground underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            Brett
          </motion.a>
          . Designhenko doesn't hire extra designers or outsource work—instead, it focuses 
          on delivering top-notch quality to a limited roster of clients at a time.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
