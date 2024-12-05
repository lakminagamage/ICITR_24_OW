import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Agenda() {
  return (
    <div className="bg-white">
      <Hero subtitle={"The Agenda of ICITR 2024"} buttonsVisible={false} />
      <div className="container mx-auto py-12">
        <iframe
          src="/agenda/Agenda.pdf#zoom=page-fit"
          width="100%"
          height="800px"
          style={{ border: "none" }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
