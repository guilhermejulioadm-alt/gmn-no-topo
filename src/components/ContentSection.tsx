import { m } from "framer-motion";
import { Zap, UserCheck, Settings, MessageSquare, Video, Trophy } from "lucide-react";

const features = [
  { icon: Zap, title: "Acesso imediato às aulas", desc: "Assim que sua inscrição for confirmada, você já recebe acesso completo à plataforma e pode começar a assistir às aulas sem esperar." },
  { icon: UserCheck, title: "Garantia de 7 dias", desc: "Você tem 7 dias inteiros para assistir, aplicar o conteúdo e decidir se o curso é realmente para você. Se não ficar satisfeito, devolvemos 100% do seu investimento." },
  { icon: Settings, title: "1 ano de acesso ao curso", desc: "Estude no seu ritmo! Você terá 12 meses para rever as aulas quantas vezes quiser e consolidar seu aprendizado." },
  { icon: MessageSquare, title: "Comunidade e suporte no WhatsApp", desc: "Participe de um grupo exclusivo para trocar experiências, tirar dúvidas e receber insights valiosos." },
  { icon: Video, title: "Suporte no Zoom", desc: "Encontros pelo Zoom para tirar dúvidas ao vivo e receber orientações personalizadas." },
  { icon: Trophy, title: "Resultados Reais", desc: "Nossos alunos já estão conquistando posições de destaque no Google, atraindo clientes diariamente." },
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Para extrair o máximo de resultado,{" "}
            <span className="text-gradient-gold">uma empresa precisa estar bem posicionada</span> no Google Meu Negócio.
          </h2>
          <p className="text-muted-foreground text-lg sm:text-lg">Nosso conteúdo te ajudará a:</p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <m.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
