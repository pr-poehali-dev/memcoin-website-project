import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import MathBackground from "@/components/MathBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <MathBackground />
      <Hero />
      <About />
      <HowToBuy />
    </div>
  );
};

export default Index;
