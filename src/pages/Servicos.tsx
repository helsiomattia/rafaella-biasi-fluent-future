import Layout from "@/components/layout/Layout";
import ServicosHero from "@/components/servicos/ServicosHero";
import ServicosGrid from "@/components/servicos/ServicosGrid";
import ComoFuncionaServicos from "@/components/servicos/ComoFuncionaServicos";
import DiferenciaisServicos from "@/components/servicos/DiferenciaisServicos";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const Servicos = () => (
  <Layout>
    <ServicosHero />
    <ServicosGrid />
    <ComoFuncionaServicos />
    <DiferenciaisServicos />
    <CtaFinalSection />
  </Layout>
);

export default Servicos;
