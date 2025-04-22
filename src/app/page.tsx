import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionHome from "@/components/sectionHome";
import SectionAboutUs from "@/components/sectionAbout";
import SectionServices from "@/components/sectionServices";
import SectionMissionVision from "@/components/sectionMissionVision";
import SectionValues from "@/components/sectionValues";
import SectionContact from "@/components/sectionContact";
import ScrollToUp from "@/components/scrollToUp/btn-scroll-to-up";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col">
        <SectionHome />
        <SectionAboutUs />
        <SectionServices />
        <SectionMissionVision />
        <SectionValues />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}
