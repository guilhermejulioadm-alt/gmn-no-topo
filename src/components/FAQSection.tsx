import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "O curso funciona para qualquer tipo de negócio local?", a: "Com certeza, desde que seja um negócio lícito, que possa aparecer no Google Meu Negócio." },
  { q: "Precisa saber programar para aplicar os aprendizados do curso?", a: "Não. Não será utilizada nenhuma linha de código durante as aulas. Qualquer pessoa será capaz de implementar o aprendizado com facilidade." },
  { q: "O curso tem suporte para tirar dúvidas?", a: "Temos um grupo no WhatsApp com os alunos e o nosso pessoal de suporte." },
  { q: "Como receberei o acesso ao curso?", a: "Você receberá um e-mail com o link de acesso ao curso imediatamente após a realização do pagamento." },
  { q: "Quais são as formas de pagamento?", a: "A aquisição do curso pode ser feita através de cartão de crédito em até 12x, no Pix ou boleto bancário." },
  { q: "Por quanto tempo eu terei acesso ao curso?", a: "Acesso por 365 dias, 1 ano." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Caso ainda tenha dúvidas, entre em contato conosco
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-sm sm:text-base hover:text-primary transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
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

export default FAQSection;
