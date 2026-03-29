import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaFinalSection = () => (
  <section className="py-20 md:py-28 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Pronta para começar sua jornada?
        </h2>
        <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
          Agende uma conversa gratuita e descubra como posso te ajudar a alcançar seus objetivos com o inglês.
        </p>
        <Button
          variant="hero"
          size="lg"
          className="text-base px-10 py-6"
          asChild
        >
          <Link to="/contato">Agendar minha conversa gratuita</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CtaFinalSection;
