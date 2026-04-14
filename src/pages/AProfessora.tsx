import Layout from "@/components/layout/Layout";
import SobreHero from "@/components/sobre/SobreHero";
import SobreResumoSection from "@/components/sobre/SobreResumoSection";
import HistoriaSection from "@/components/sobre/HistoriaSection";
import ExperienciaSection from "@/components/sobre/ExperienciaSection";
import FormacaoSection from "@/components/sobre/FormacaoSection";
import DiferenciaisSobreSection from "@/components/sobre/DiferenciaisSobreSection";
import CtaFinalSection from "@/components/home/CtaFinalSection";

const AProfessora = () => (
  <Layout>
    <SobreHero />
    <SobreResumoSection />
    <HistoriaSection />
    <ExperienciaSection />
    <FormacaoSection />
    <DiferenciaisSobreSection />
    <CtaFinalSection />
  </Layout>
);

export default AProfessora;
