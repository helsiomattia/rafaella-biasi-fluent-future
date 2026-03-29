import Layout from "@/components/layout/Layout";
import MetodologiaHero from "@/components/metodologia/MetodologiaHero";
import MetodologiaGrid from "@/components/metodologia/MetodologiaGrid";
import ComoFuncionaMetodologia from "@/components/metodologia/ComoFuncionaMetodologia";
import DiferenciaisMetodologia from "@/components/metodologia/DiferenciaisMetodologia";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const Metodologia = () => (
  <Layout>
    <MetodologiaHero />

    <section className="bg-[#f5f2ec] py-20 md:py-24">
      <div className="space-y-20">
        <MetodologiaGrid />
        <ComoFuncionaMetodologia />
        <DiferenciaisMetodologia />
      </div>
    </section>

    <CtaFinalSection />
  </Layout>
);

export default Metodologia;
