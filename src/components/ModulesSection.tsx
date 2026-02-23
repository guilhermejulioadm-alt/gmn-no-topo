import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const modules = [
  "Criar um Google Meu Negócio do zero",
  "Pilares do Google Meu Negócio",
  "O Hack para o Topo do Google",
  "Principais Erros de Bloqueio do GMN",
  "PDFs Úteis e Grupo VIP",
  "Bônus - Automação GMN",
];

const ModulesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-heading font-bold">Módulos</h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Veja o material que você receberá no <span className="text-gradient-gold font-semibold">GMN no TOPO</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {modules.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-semibold text-base">{m}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
