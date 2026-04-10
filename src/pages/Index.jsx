import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Preview from "@/components/landing/Preview";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Trust />
    <Features />
    <HowItWorks />
    <Preview />
    <CTA />
    <Footer />
  </div>
);

export default Index;
