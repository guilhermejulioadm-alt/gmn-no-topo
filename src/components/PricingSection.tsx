import { m } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

const items = [
  "Criar um Google Meu Negócio do zero",
  "Pilares Do Google Meu Negócio",
  "O Hack Para O Topo Do Google",
  "Principais Erros De Bloqueio Do GMN",
  "PDFs Úteis E Grupo VIP",
  "Garantia Incondicional",
  "Bônus - Automação GMN",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding scroll-mt-20">
      <div className="container mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            Compra 100% segura! Receba seu acesso imediatamente após a compra.
          </p>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-heading font-bold">
            Esse é o momento de acessar seu material completo
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto glass-card rounded-2xl p-8 border-primary/30 shadow-gold relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
          
          <div className="text-center mb-6">
            <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wider">
              Oferta Exclusiva
            </span>
            <div className="mt-3">
              <span className="text-muted-foreground line-through text-lg">De R$197,90</span>
            </div>
            <div className="mt-1">
              <span className="text-4xl sm:text-5xl font-heading font-extrabold text-gradient-gold">R$97,00</span>
              <span className="text-muted-foreground ml-1">/à vista</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-base text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://pay.kiwify.com.br/rDcrbM5"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-gold text-primary-foreground font-heading font-bold py-4 rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
          >
            QUERO AUMENTAR MINHAS VENDAS!
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default PricingSection;
