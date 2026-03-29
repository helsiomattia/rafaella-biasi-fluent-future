import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import DiferenciaisSection from "@/components/home/DiferenciaisSection";
import ParaQuemSection from "@/components/home/ParaQuemSection";
import ComoFuncionaSection from "@/components/home/ComoFuncionaSection";
import SobreResumoSection from "@/components/home/SobreResumoSection";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <DiferenciaisSection />
    <ParaQuemSection />
    <ComoFuncionaSection />
    <SobreResumoSection />
    <CtaFinalSection />
  </Layout>
);

export default Index;
