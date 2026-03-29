import Layout from "@/components/layout/Layout";
import MetodologiaHero from "@/components/metodologia/MetodologiaHero";
import FilosofiaMetodologia from "@/components/metodologia/FilosofiaMetodologia";
import MetodologiaSteps from "@/components/metodologia/MetodologiaSteps";
import DiferenciaisMetodologia from "@/components/metodologia/DiferenciaisMetodologia";
import ResultadosMetodologia from "@/components/metodologia/ResultadosMetodologia";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const Metodologia = () => (
  <Layout>
    <MetodologiaHero />
    <FilosofiaMetodologia />
    <MetodologiaSteps />
    <DiferenciaisMetodologia />
    <ResultadosMetodologia />
    <CtaFinalSection />
  </Layout>
);

export default Metodologia;
