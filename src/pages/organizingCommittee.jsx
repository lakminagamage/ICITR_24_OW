import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CommitteeGrid from "@/components/CommitteeGrid";

export default function Committee() {
  const coChairs = [
    {
      name: "Mr. BH Sudantha (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "bhsu",
    },
  ];

  const progChairs = [
    {
      name: "Dr. ITS Piyathilake (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "itsp",
    },
  ];

  const confSec = [
    {
      name: "Dr. PD Talagala (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "pdta",
    },
  ];

  const localOrgChair = [
    {
      name: "Dr. Thilina Thanthriwatte (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "tmth",
    },
  ];

  const techProgCommChairs = [
    {
      name: "Dr. MFM Firdhous (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "mfmf",
    },
  ];

  const intlRelationsChairs = [
    {
      name: "Ms. KADT Kulawansa (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "kadt",
    },
  ];

  const indLiaChairs = [
    {
      name: "Ms. Shashika Kumarasinghe (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "kmsj",
    },
  ];

  const awardChairs = [
    {
      name: "Prof. TC Sandanayake",
      description: "University of Moratuwa, Sri Lanka",
      image: "tcsa",
    },
  ];

  const pubPRChairs = [
    {
      name: "Ms. Anne Perera",
      description: "University of Moratuwa, Sri Lanka",
      image: "manp",
    },
  ];

  const financeChairs = [
    {
      name: "Ms. MB Mufitha",
      description: "University of Moratuwa, Sri Lanka",
      image: "mbmu",
    },
  ];

  const workshopChairs = [
    {
      name: "Ms. BNNT Batagoda",
      description: "University of Moratuwa, Sri Lanka",
      image: "bnnt",
    },
  ];

  const localOrgChairs = [
    {
      name: "Mrs. Indika Karunarathna",
      description: "University of Moratuwa, Sri Lanka",
      image: "ikar",
    },
    {
      name: "Dr. Subha Fernanco (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "ksdf",
    },
    {
      name: "Mrs. WASN Wijetunge",
      description: "University of Moratuwa, Sri Lanka",
      image: "wasn",
    },
    {
      name: "Dr. BLD Seneviratne",
      description: "University of Moratuwa, Sri Lanka",
      image: "blds",
    },
    {
      name: "Mrs. MN Chandimali",
      description: "University of Moratuwa, Sri Lanka",
      image: "chandimali",
    },
    {
      name: "Ms. PGS Upeksha",
      description: "University of Moratuwa, Sri Lanka",
      image: "upeksha",
    },
    {
      name: "Ms. WMRM Wijesuriya",
      description: "University of Moratuwa, Sri Lanka",
      image: "wijesuriya",
    },
  ];

  const publicationChairs = [
    {
      name: "Dr. GU Ganegoda",
      description: "University of Moratuwa, Sri Lanka",
      image: "guga",
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        subtitle={"Meet Our Masterminds<br/>Behind The Success of 9 Years"}
        buttonsVisible={true}
      />

      <div className="container mx-auto py-12">
        <CommitteeGrid people={coChairs} title={"General Chair"} />

        <CommitteeGrid people={progChairs} title={"General Co-Chair"} />

        <CommitteeGrid people={confSec} title={"Secretary"} />

        <CommitteeGrid
          people={techProgCommChairs}
          title={"Technical Program Committee Chair"}
        />

        <CommitteeGrid
          people={localOrgChair}
          title={"Local Organizing Chair"}
        />

        <CommitteeGrid
          people={intlRelationsChairs}
          title={"International Relations Chair"}
        />

        <CommitteeGrid people={publicationChairs} title={"Publication Chair"} />

        <CommitteeGrid people={awardChairs} title={"Awards Chair"} />

        <CommitteeGrid people={indLiaChairs} title={"Industry Liaison Chair"} />

        <CommitteeGrid
          people={pubPRChairs}
          title={"Publicity and Public Relations Chair"}
        />

        <CommitteeGrid people={financeChairs} title={"Finance Chair"} />

        <CommitteeGrid
          people={workshopChairs}
          title={"Workshop and Registration Chair"}
        />

        <CommitteeGrid
          people={localOrgChairs}
          title={"Local Organizing Committee"}
        />
      </div>
      <Footer />
    </div>
  );
}
