import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import RecentWork from "@/components/RecentWork";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Process />
        <About />
        <Benefits />
        <Testimonials />
        <RecentWork />
        <Pricing />
        <FAQ />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
