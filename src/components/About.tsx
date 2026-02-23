import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          First launched in 2021, our service was built to simplify frontend
          development through a subscription-based model. Today, everything is
          handled personally—no outsourcing, no extra developers. We{" "}
          <a
            href="#"
            className="text-foreground underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity duration-200"
          >
            pixel2code
          </a>{" "}
          focus on delivering high-quality, production-ready code to a limited
          number of clients at a time, ensuring speed, consistency, and
          attention to detail on every project.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
