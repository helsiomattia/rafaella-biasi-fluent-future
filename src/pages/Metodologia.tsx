import Layout from "@/components/layout/Layout";
import MetodologiaHero from "@/components/metodologia/MetodologiaHero";
import MetodologiaGrid from "@/components/metodologia/MetodologiaGrid";
import ComoFuncionaMetodologia from "@/components/metodologia/ComoFuncionaMetodologia";
import DiferenciaisMetodologia from "@/components/metodologia/DiferenciaisMetodologia";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const Metodologia = () => (
  <Layout>
    <MetodologiaHero />
    <MetodologiaGrid />
    <ComoFuncionaMetodologia />
    <DiferenciaisMetodologia />
    <CtaFinalSection />
  </Layout>
);

export default Metodologia;
