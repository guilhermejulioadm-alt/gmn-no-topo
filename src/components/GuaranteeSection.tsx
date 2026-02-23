import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 sm:p-12 text-center border-primary/20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-3xl font-heading font-bold mb-4">
            Garantia incondicional de <span className="text-gradient-gold">7 dias</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Nós confiamos tanto na qualidade do Google Meu Negócio no TOPO que você terá 7 dias completos para testar o curso, aplicar os primeiros módulos e sentir na prática o impacto do conteúdo.
          </p>
          <p className="mt-4 text-sm text-primary font-semibold">
            Compra totalmente segura: Experimente sem riscos e cancele a qualquer momento!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
