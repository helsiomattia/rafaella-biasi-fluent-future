import Layout from "@/components/layout/Layout";

const Sobre = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <span className="text-sm font-medium text-accent tracking-widest uppercase">Sobre</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">Conheça a Rafaella</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Conteúdo completo em breve.</p>
      </div>
    </section>
  </Layout>
);

export default Sobre;
