import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        {/* Footer links */}
        <motion.div 
          className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a 
            href="https://x.com/pranavmalvawala"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Twitter
          </motion.a>
          <span>•</span>
          <motion.a 
            href="https://www.linkedin.com/in/pranavmalvawala/"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            LinkedIn
          </motion.a>
          <span>•</span>
          <motion.a 
            href="#" 
            className="hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Terms
          </motion.a>
        </motion.div>

        <motion.p 
          className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © 2026 Pixel to Code. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
