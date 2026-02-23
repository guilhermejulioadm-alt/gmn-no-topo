import { motion } from "framer-motion";
import { Users, RefreshCw, ShoppingBag, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Clientes Todos os Dias",
    description: "Estar no Google significa receber ligações, mensagens e visitas diariamente.",
  },
  {
    icon: RefreshCw,
    title: "Retenção e Renovação",
    description: "Garanta maior taxa de fidelização e contratos renovados com facilidade.",
  },
  {
    icon: ShoppingBag,
    title: "Mais Produtos na Esteira",
    description: "Amplie sua oferta com novos serviços ligados ao Google Meu Negócio.",
  },
  {
    icon: TrendingUp,
    title: "ROI e CAC Otimizados",
    description: "Melhore os resultados gerais dos seus clientes, reduzindo custos e aumentando lucros.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-4"
        >
          Após implementar o <span className="text-gradient-gold">GMN no TOPO</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{b.title}</h3>
              <p className="text-base text-muted-foreground">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://pay.kiwify.com.br/YK3cDFM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold px-8 py-4 rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
          >
            QUERO AUMENTAR MINHAS VENDAS!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
