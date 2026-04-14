import Layout from "@/components/layout/Layout";
import MetodologiaHero from "@/components/metodologia/MetodologiaHero";
import ServicosGrid from "@/components/servicos/ServicosGrid";
import ComoFuncionaMetodologia from "@/components/metodologia/ComoFuncionaMetodologia";
import DiferenciaisMetodologia from "@/components/metodologia/DiferenciaisMetodologia";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const OPrograma = () => (
  <Layout>
    {/* Hero Section */}
    <MetodologiaHero />
    
    {/* Modalidades (O que é oferecido) */}
    <div className="bg-secondary">
      <div className="container mx-auto px-6 text-center pt-20 pb-8">
        <span className="text-sm font-medium text-accent tracking-widest uppercase">Modalidades</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Soluções Estratégicas
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          Diferentes formatos pensados para a sua rotina e necessidade.
        </p>
      </div>
      {/* ServicosGrid já tem padding, mas vou deixá-lo integrado */}
      <div className="-mt-6">
        <ServicosGrid /> 
      </div>
    </div>

    {/* Como Funciona e Por Que Escolher (Metodologia e Diferenciais) */}
    <section className="bg-background py-20 md:py-28">
      <div className="space-y-24">
        <ComoFuncionaMetodologia />
        <DiferenciaisMetodologia />
      </div>
    </section>

    {/* CTA Final */}
    <CtaFinalSection />
  </Layout>
);

export default OPrograma;
