import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import guilhermeFoto from "@/assets/guilherme-foto.webp";

const HeroSection = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight"
          >
            Fique no{" "}
            <span className="text-gradient-gold">TOPO</span> da sua{" "}
            <span className="text-gradient-gold">Região</span> e tenha{" "}
            <span className="text-gradient-gold">Clientes todos os dias!</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-body max-w-2xl"
          >
            Transforme uma tarefa simples em uma renda consistente seguindo um passo a passo comprovado.
          </m.p>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-sm sm:max-w-md"
          >
            <img
              src={guilhermeFoto}
              alt="Guilherme Júlio"
              width={384}
              height={512}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-gold"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-gold-sm hover:bg-gradient-gold-hover transition-transform duration-300 hover:scale-105"
            >
              QUERO ACESSAR O CURSO
              <ArrowRight className="w-5 h-5" />
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
