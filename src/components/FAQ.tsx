import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the subscription work?",
    answer: "You subscribe to a monthly plan and submit as many requests as you like. We work on them one at a time (or more, depending on your plan). Once one task is done, we move on to the next. Simple, predictable, and stress-free."
  },
  {
    question: "How fast is delivery?",
    answer: "Most requests are completed within 1-3 business days, depending on complexity. Smaller tasks are often faster."
  },
  {
    question: "Do you provide design services?",
    answer: "No — you provide the designs, and we convert them into clean, production-ready code. This helps us stay focused on what we do best."
  },
  {
    question: "Can I pause or cancel anytime?",
    answer: "Yes — absolutely. Pause or cancel your subscription whenever you want. No contracts. No questions asked."
  },
  {
    question: "Is this better than hiring a freelancer or agency?",
    answer: "If you want:    ✅ predictable monthly pricing    ✅ fast turnaround ✅ consistent quality ✅ zero hiring overhead, then yes this model is usually faster, simpler, and more cost-effective."
  },
  {
    question: "Who will be working on my projects?",
    answer: "All work is handled personally no outsourcing, no middlemen. This ensures consistent quality and direct communication."
  },
  {
    question: "How do we communicate?",
    answer: "Email or WhatsApp (depending on your plan). Clear updates, quick replies, and no ticketing systems."
  },
  {
    question: "What if I don't like something?",
    answer: "Unlimited revisions are included. We'll keep refining until you're happy."
  },
  {
    question: "Do you offer refunds?",
    answer: "Because time is reserved for you once subscribed, refunds aren't offered but you can cancel anytime before your next billing cycle."
  },
  {
    question: "What if I don't like the code?",
    answer: "No worries! We'll continue to revise the code until you're 100% satisfied."
  },
  {
    question: "What kind of work can I request?",
    answer: "You can request: Design-to-code conversions, Landing pages & multi-page websites, Frontend components, Dashboards & UI screens Animations & interactions Responsive layouts. If it's frontend-related, you're covered."
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
