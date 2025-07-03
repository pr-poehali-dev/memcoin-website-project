const MathBackground = () => {
  const formulas = [
    "E = mc²",
    "∫ f(x)dx",
    "∑ x²",
    "∂f/∂x",
    "lim x→∞",
    "√(x² + y²)",
    "π = 3.14159...",
    "e^(iπ) + 1 = 0",
    "∇ × F = 0",
    "Δx · Δp ≥ ℏ/2",
    "∫∫ dA = A",
    "f'(x) = dy/dx",
    "∑ᵢ₌₁ⁿ i = n(n+1)/2",
    "P(A∩B) = P(A)P(B)",
    "σ = √(Σ(x-μ)²/n)",
    "sin²θ + cos²θ = 1",
    "log₂(x) = ln(x)/ln(2)",
    "∫₀^∞ e^(-x²)dx = √π/2",
    "∂²u/∂x² = ∂²u/∂y²",
    "F = ma",
    "∇·E = ρ/ε₀",
    "∮ B·dl = μ₀I",
    "H = -∑ pᵢ log₂(pᵢ)",
    "χ² = Σ(O-E)²/E",
    "∫ x^n dx = x^(n+1)/(n+1)",
    "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)",
    "Γ(n) = (n-1)!",
    "∫ e^x dx = e^x + C",
    "∂/∂t (∇×E) = -∂B/∂t",
    "∫ sin(x) dx = -cos(x) + C",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {formulas.map((formula, index) => (
          <div
            key={index}
            className="absolute text-slate-600 font-mono text-sm opacity-20 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
              fontSize: `${Math.random() * 8 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation));
          }
        }
      `}</style>
    </div>
  );
};

export default MathBackground;
