import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Mail, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths } from "date-fns";
import { motion } from "framer-motion";

const timeSlots = [
  "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm",
  "3:00pm", "3:30pm", "4:00pm", "4:30pm", "5:00pm"
];

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <section id="book" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-5xl md:text-6xl"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            😊
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Book a 15-min intro call
          </h2>
        </motion.div>

        {/* Calendar Card */}
        <motion.div 
          className="bg-card rounded-2xl md:rounded-3xl border border-border shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Info */}
            <motion.div 
              className="p-6 md:p-8 lg:border-r border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-xl md:text-2xl"
                  whileHover={{ scale: 1.1 }}
                >
                  👨‍💼
                </motion.div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Brett Williams</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Designhenko</p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2">Intro Call</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-6">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm md:text-base">15 min</span>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Schedule a quick intro call to learn more about how Designhenko works and how it can help you with your design needs.
              </p>
            </motion.div>

            {/* Right Side - Calendar */}
            <motion.div 
              className="p-4 md:p-8 bg-secondary/30 dark:bg-secondary/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <motion.button 
                  onClick={handlePrevMonth}
                  className="p-1.5 md:p-2 hover:bg-secondary rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
                <h4 className="font-semibold text-base md:text-lg">
                  {format(currentMonth, "MMMM yyyy")}
                </h4>
                <motion.button 
                  onClick={handleNextMonth}
                  className="p-1.5 md:p-2 hover:bg-secondary rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>

              {/* Calendar */}
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="rounded-xl border-0 bg-card pointer-events-auto w-full p-3"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4 w-full",
                  caption: "hidden",
                  caption_label: "text-sm font-medium",
                  nav: "hidden",
                  table: "w-full border-collapse",
                  head_row: "flex justify-between",
                  head_cell: "text-muted-foreground rounded-md w-8 md:w-10 font-normal text-xs md:text-sm",
                  row: "flex w-full mt-1 md:mt-2 justify-between",
                  cell: "text-center text-xs md:text-sm p-0 relative",
                  day: "h-8 w-8 md:h-10 md:w-10 p-0 font-normal rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center text-xs md:text-sm text-foreground",
                  day_selected: "bg-primary text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground font-semibold",
                  day_outside: "text-muted-foreground/50",
                  day_disabled: "text-muted-foreground/30",
                }}
                disabled={(date) => date < new Date()}
              />

              {/* Time Slots */}
              {selectedDate && (
                <motion.div 
                  className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Available times for {format(selectedDate, "MMM d, yyyy")}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.slice(0, 8).map((time, i) => (
                      <motion.button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 md:py-2.5 px-2 md:px-3 text-xs md:text-sm font-medium rounded-lg transition-colors ${
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border hover:border-primary"
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Confirm Button */}
              {selectedDate && selectedTime && (
                <motion.button 
                  className="w-full mt-4 md:mt-6 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm md:text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Confirm Booking
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Email alternative */}
        <motion.div 
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a 
            href="mailto:srashiwala15@gmail.com"
            className="inline-flex items-center gap-3 px-5 md:px-6 py-3 md:py-4 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
            <div className="text-left">
              <p className="text-xs md:text-sm text-muted-foreground">Prefer to email?</p>
              <p className="font-medium text-sm md:text-base">srashiwala15@gmail.com</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
