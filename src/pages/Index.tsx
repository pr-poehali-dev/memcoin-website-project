import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import MathBackground from "@/components/MathBackground";
import FloatingImages from "@/components/FloatingImages";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <MathBackground />
      <FloatingImages />
      <Hero />
      <About />
      <HowToBuy />
    </div>
  );
};

export default Index;
