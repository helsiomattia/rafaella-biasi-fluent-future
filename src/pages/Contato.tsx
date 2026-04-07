import Layout from "@/components/layout/Layout";
import ContatoHero from "@/components/contato/ContatoHero";
import PlanosSection from "@/components/contato/PlanosSection";
import ContatoForm from "@/components/contato/ContatoForm";
import ContatoInfo from "@/components/contato/ContatoInfo";

const Contato = () => (
  <Layout>
    <ContatoHero />

    {/* Planos com Wizard */}
    <PlanosSection />

    {/* Formulário de Contato */}
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Prefere falar diretamente?
          </h2>
          <p className="mt-4 text-muted-foreground font-light text-lg max-w-xl mx-auto">
            Me envie uma mensagem e respondo o mais rápido possível.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          <ContatoForm />
          <ContatoInfo />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contato;
