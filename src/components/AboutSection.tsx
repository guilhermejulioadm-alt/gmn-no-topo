import { m } from "framer-motion";
import gmnMestre from "@/assets/gmn-mestre.jpeg.asset.json";
import gmnSobral from "@/assets/gmn-sobral.png.asset.json";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4"
          >
            <img
              src={gmnMestre.url}
              alt="Guilherme Júlio - Mestre Subido PRO 2025"
              width={600}
              height={800}
              className="rounded-2xl shadow-gold-sm w-full"
              loading="lazy"
              decoding="async"
            />
            <img
              src={gmnSobral.url}
              alt="Guilherme Júlio com Sobral - 3º lugar Campeonato Subido PRO"
              width={600}
              height={600}
              className="rounded-2xl shadow-gold-sm w-full"
              loading="lazy"
              decoding="async"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Quem sou eu?
            </span>
            <h2 className="text-3xl sm:text-3xl font-heading font-bold mt-2 mb-4">
              Guilherme Júlio
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Administrador e Analista de Marketing Digital, com mais de 3 anos no mercado. 
              Atendeu diversos clientes e projetos trazendo uma abordagem completa no digital 
              que engloba todo o fluxo para acelerar resultados online e off-line.
            </p>
            <ul className="mt-4 space-y-2 text-base text-foreground/80">
              <li>✦ Mais de 90 milhões faturados para clientes</li>
              <li>✦ Mais de 70 empresas atendidas</li>
              <li>✦ Mais de 2 milhões gerenciados em tráfego pago</li>
              <li>✦ Certificado pelo Google Ads</li>
              <li>✦ Certificado pela comunidade Sobral de tráfego</li>
            </ul>

            <a
              href="https://pay.kiwify.com.br/rDcrbM5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold px-8 py-4 rounded-full shadow-gold hover:scale-105 transition-transform duration-300 mt-6"
            >
              QUERO AUMENTAR MINHAS VENDAS!
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
