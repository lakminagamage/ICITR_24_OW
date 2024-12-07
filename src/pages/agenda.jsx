import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CommitteeGrid from "@/components/CommitteeGrid";

const documents = [
  { title: "Agenda", file: "/agenda/Agenda.pdf" },
  {
    title: "Session 1 and 5 - Track 04",
    file: "/agenda/ICITRSession1and5Track04.pdf",
  },
  { title: "Session 2 - Track 01", file: "/agenda/ICITRSession2Track01.pdf" },
  { title: "Session 3 - Track 01", file: "/agenda/ICITRSession3Track01.pdf" },
  { title: "Session 4 - Track 02", file: "/agenda/ICITRSession4Track02.pdf" },
  { title: "Session 6 - Track 02", file: "/agenda/ICITRSession6Track02.pdf" },
  { title: "Session 7 - Track 02", file: "/agenda/ICITRSession07Track 02.pdf" },
  { title: "Session 8 - Track 05", file: "/agenda/ICITRSession8Track05.pdf" },
  { title: "Session 9 - Track 03", file: "/agenda/ICITRSession9Track03.pdf" },
  { title: "Session 10 - Track 02", file: "/agenda/ICITRSession10Track 2.pdf" },
];

export default function Agenda() {
  return (
    <div className="bg-white">
      <Hero subtitle={"The Agenda of ICITR 2024"} buttonsVisible={false} />
      <div className="container mx-auto py-12 space-y-12">
        {documents.map((doc, index) => (
          <div key={index} className="border-t pt-8">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl mb-2">
                {doc.title}
                </h2>
                {/* hr */}
                <div
                  className="mx-auto h-0.5 bg-gradient-to-r from-blue-300 to-pink-300 mb-8"
                  style={{ width: "80%" }}
                ></div>
                {/* hr */}
              
            </div>
            <iframe
              src={`${doc.file}#zoom=page-fit`}
              width="100%"
              height="800px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
