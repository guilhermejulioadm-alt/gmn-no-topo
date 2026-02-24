import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/guilherme-foto.webp";

const CTA_URL = "https://pay.kiwify.com.br/YK3cDFM";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 sm:items-center sm:pb-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Guilherme Júlio - Especialista em Google Meu Negócio"
          className="w-full h-full object-cover object-top opacity-50"
          width={1200}
          height={1600}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center sm:text-left sm:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight"
          >
            Fique no{" "}
            <span className="text-gradient-gold">TOPO</span> da sua{" "}
            <span className="text-gradient-gold">Região</span> e tenha{" "}
            <span className="text-gradient-gold">Clientes todos os dias!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-lg text-muted-foreground max-w-xl"
          >
            Transforme uma tarefa simples em uma renda consistente seguindo um passo a passo comprovado. Método criado por especialista em tráfego pago e aplicado por diversos empreendedores locais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-gold-sm hover:bg-gradient-gold-hover transition-transform duration-300 hover:scale-105"
            >
              QUERO ACESSAR O CURSO
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
