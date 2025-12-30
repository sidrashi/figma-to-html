import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How fast will I receive my designs?",
    answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
  },
  {
    question: "How does onboarding work?",
    answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock."
  },
  {
    question: "Who are the designers?",
    answer: "Designhenko is a one-man agency, ran by Brett, the founder. Designhenko does not employ other designers, or outsource work to any other entity. You'll work directly with me through the entirety of your experience."
  },
  {
    question: "Is there a limit to how many requests I can make?",
    answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
  },
  {
    question: "How does the pause feature work?",
    answer: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy. Billing cycles are based on 31 day period."
  },
  {
    question: "How do you handle larger requests?",
    answer: "Larger requests are broken down on Designhenko's end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done."
  },
  {
    question: "What programs do you design in?",
    answer: "Most requests are designed using Figma."
  },
  {
    question: "How does Webflow development work?",
    answer: "Webflow development is included with all subscriptions and is simply treated as a design request. As long as your website can be supported by the Webflow platform, Designhenko will take care of the development."
  },
  {
    question: "How will I request designs?",
    answer: "Designhenko offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video."
  },
  {
    question: "What if I don't like the design?",
    answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
  },
  {
    question: "Are there any requests you don't support?",
    answer: "Absolutely. Designhenko does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design, complex packaging, extensive print design, and Adobe InDesign documents."
  },
  {
    question: "What if I only have a single request?",
    answer: "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
  },
  {
    question: "Are there any refunds?",
    answer: "Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently asked questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="bg-card rounded-xl sm:rounded-2xl border border-border px-4 sm:px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 md:py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
