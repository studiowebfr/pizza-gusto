import Hero from "@/components/home/Hero";
import Manifeste from "@/components/home/Manifeste";
import LeChampion from "@/components/home/LeChampion";
import PateEtSauce from "@/components/home/PateEtSauce";
import MosaiqueSpecialites from "@/components/home/MosaiqueSpecialites";
import PanneauxEpingles from "@/components/home/PanneauxEpingles";
import Marquee from "@/components/home/Marquee";
import IndexCartes from "@/components/home/IndexCartes";
import AppelFinal from "@/components/home/AppelFinal";

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <Manifeste />
      <LeChampion />
      <PateEtSauce />
      <MosaiqueSpecialites />
      <PanneauxEpingles />
      <Marquee />
      <IndexCartes />
      <AppelFinal />
    </>
  );
}
