import { motion } from "framer-motion";

const logos = [
  "Google",
  "Google Meu Negócio",
  "Google",
  "Google Meu Negócio",
  "Google",
  "Google Meu Negócio",
];

const LogoMarquee = () => {
  return (
    <section className="py-10 bg-foreground/5 overflow-hidden border-y border-border/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span
            key={i}
            className="mx-8 sm:mx-12 text-2xl sm:text-4xl font-heading font-bold text-muted-foreground/40 select-none"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
