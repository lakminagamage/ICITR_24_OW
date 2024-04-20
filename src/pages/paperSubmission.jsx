import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import Instructions from "@/components/Instructions";
import Footer from "@/components/Footer";

export default function PaperSubmission() {
  return (
    <div>
      <Hero subtitle="Paper Submissions are now open<br/>for ICITR 2024" />
      <Timeline />
      <Tracks />
      <Instructions />
      <Footer />
    </div>
  );
}
