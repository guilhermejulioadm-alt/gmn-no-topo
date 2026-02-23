import { motion } from "framer-motion";
import { Rocket, Palette, Gauge } from "lucide-react";

const steps = [
  { icon: Rocket, title: "Venda em 7 Dias", desc: "Um protocolo de implementação rápida para você fazer suas primeiras vendas em apenas 7 dias." },
  { icon: Palette, title: "Construção de um perfil PROFISSIONAL", desc: "Aprenda a criar perfis do ZERO, do jeito certo, mesmo sem nunca ter criado um." },
  { icon: Gauge, title: "Otimização FULL", desc: "Aprenda macetes para fazer o perfil do seu cliente bombar e gerar tanto resultado que ele vai querer renovar ano após ano." },
];

const MethodSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-14"
        >
          Como você vai colocar{" "}
          <span className="text-gradient-gold">GMN NO TOPO</span> com o meu método
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                <s.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

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

export default MethodSection;
