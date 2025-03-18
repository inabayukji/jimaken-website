import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ResultsSection from "@/components/home/ResultsSection";
import AIMatchingSection from "@/components/home/AIMatchingSection";
import DifferentiationSection from "@/components/home/DifferentiationSection";
import CEOSection from "@/components/home/CEOSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DifferentiationSection />
      <AIMatchingSection />
      <ResultsSection />
      <ServicesSection />
      <CEOSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
