import Layout from "@/components/layout/Layout";
import ContatoHero from "@/components/contato/ContatoHero";
import ContatoForm from "@/components/contato/ContatoForm";
import ContatoInfo from "@/components/contato/ContatoInfo";

const Contato = () => (
  <Layout>
    <ContatoHero />

    <section className="bg-[#f5f2ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2">
        <ContatoForm />
        <ContatoInfo />
      </div>
    </section>
  </Layout>
);

export default Contato;
