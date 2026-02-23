import { motion } from "framer-motion";
import depoimento1 from "@/assets/depoimento-1.webp";
import depoimento2 from "@/assets/depoimento-2.webp";
import depoimento3 from "@/assets/depoimento-3.png";
import depoimento4 from "@/assets/depoimento-4.png";

const testimonials = [
  { src: depoimento1, alt: "Depoimento de aluno sobre o curso GMN no Topo" },
  { src: depoimento2, alt: "Depoimento de aluno sobre conteúdo de SEO" },
  { src: depoimento3, alt: "Depoimento de aluno sobre didática do curso" },
  { src: depoimento4, alt: "Depoimento de aluno sobre ranking no Google Meu Negócio" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
            Prova Social
          </span>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-heading font-bold mt-2">
            O que nossos alunos estão{" "}
            <span className="text-gradient-gold">dizendo</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base sm:text-base">
            Resultados reais de pessoas que aplicaram o método GMN no Topo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden max-w-sm"
            >
              <img
                src={t.src}
                alt={t.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
