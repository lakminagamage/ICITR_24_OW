import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CommitteeGrid from "@/components/CommitteeGrid";

export default function Committee() {
  const coChairs = [
    
  ];

  const intAdvCom = [
    {
      name: "Prof. Sardar MN Islam",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "sard",
    },
    {
      name: "Prof. Chan-Yun Yang",
      description:
        "National Taipei University, Taiwan",
      image: "chan",
    },
    {
      name: "C Premachandra",
      description: "Shibaura Institute of Technology, Japan",
      image: "cpre",
    },
    {
      name: "Prof. Joshi Manohar",
      description:
        "Presidency University, India",
      image: "josh",
    },
  ];

  const progChairs = [
    {
      name: "BH Sudantha",
      description: "University of Moratuwa, Sri Lanka",
      image: "bhsu",
    },
    {
      name: "ITS Piyathilake",
      description:
        "University of Moratuwa, Sri Lanka",
      image: "itsp",
    },
  ];

  const techProgCommChairs = [
    {
      name: "C Premachandra",
      description: "Shibaura Institute of Technology, Japan",
      image: "cpre",
    },
    {
      name: "R Gopura",
      description: "University of Moratuwa, Sri Lanka",
      image: "rgop",
    },
    {
      name: "P.K.W. Abeygunawardhana",
      description: "Sri Lanka Institute of Information Technology, Sri Lanka",
      image: "pkwa",
    },
    {
      name: "S Ahangama",
      description:
        "University of Moratuwa, Sri Lanka",
      image: "saha",
    },
    {
      name: "KPN Jayasena",
      description: "University of Sabaragamuwa, Sri Lanka",
      image: "kpnj",
    },
    {
      name: "SC Premaratne",
      description:
        "University of Moratuwa, Sri Lanka",
      image: "scpr",
    },
    {
      name: "L Ranathunga",
      description: "University of Moratuwa, Sri Lanka",
      image: "lran",
    },
    {
      name: "CP Wijesiriwardana",
      description:
        "University of Moratuwa, Sri Lanka",
      image: "cpwi",
    },
    {
      name: "ATP Silva",
      description:
        "University of Moratuwa, Sri Lanka",
      image: "atps",
    },
    {
      name: "TM Thanthriwatte",
      description: "University of Moratuwa, Sri Lanka",
      image: "tmth",
    },
  ];

  const indLiaChairs = [
    {
      name: "KSD Fernando",
      description: "University of Moratuwa, Sri Lanka",
      image: "ksdf",
    },
    {
      name: "CP Wijesiriwardana",
      description: "University of Moratuwa, Sri Lanka",
      image: "cpwi",
    },
    {
      name: "ALARR Thanuja",
      description: "University of Moratuwa, Sri Lanka",
      image: "alar",
    },
    {
      name: "BNNT Batagoda",
      description: "University of Moratuwa",
      image: "bnnt",
    },
    {
      name: "PGS Upeksha",
      description: "University of Moratuwa",
      image: "pgsu",
    },
  ];

  const confSec = [
    {
      name: "PD Talagala",
      description: "University of Moratuwa, Sri Lanka",
      image: "pdta",
    }
  ];

  const awardChairs = [
    {
      name: "TC Sandanayake",
      description: "University of Moratuwa, Sri Lanka",
      image: "tcsa",
    },
    {
      name: "RGC Upeksha",
      description: "University of Moratuwa, Sri Lanka",
      image: "rgcu",
    }
  ];

  const financeChairs = [
    {
      name: "MB Mufitha",
      description: "University of Moratuwa, Sri Lanka",
      image: "mbmu",
    }
  ];

  const workshopChairs = [
    {
      name: "S Ahangama",
      description: "University of Moratuwa, Sri Lanka",
      image: "saha",
    },
    {
      name: "KMSJ Kumarasinghe",
      description: "University of Moratuwa, Sri Lanka",
      image: "kmsj",
    },
    {
      name: "MWAMP Muthukuda",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    },
    {
      name: "MAN Perera",
      description: "University of Moratuwa, Sri Lanka",
      image: "manp",
    },
    {
      name: "RGC Upeksha",
      description: "University of Moratuwa, Sri Lanka",
      image: "rgcu",
    },
  ];

  const localOrgChairs = [
    {
      name: "I Karunarathna",
      description: "University of Moratuwa, Sri Lanka",
      image: "ikar",
    },
    {
      name: "ATP Silva",
      description: "University of Moratuwa, Sri Lanka",
      image: "atps",
    },
    {
      name: "SC Premaratne",
      description: "University of Moratuwa, Sri Lanka",
      image: "scpr",
    },
    {
      name: "MFM Firdhous",
      description: "University of Moratuwa, Sri Lanka",
      image: "mfmf",
    },
    {
      name: "CP Wijesiriwardana",
      description: "University of Moratuwa, Sri Lanka",
      image: "cpwi",
    },
    {
      name: "CRJ Amalraj",
      description: "University of Moratuwa, Sri Lanka",
      image: "crja",
    },
    {
      name: "BLD Seneviratne",
      description: "University of Moratuwa, Sri Lanka",
      image: "blds",
    },
    {
      name: "WASN Wijetunge",
      description: "University of Moratuwa, Sri Lanka",
      image: "wasn",
    },
    {
      name: "KADT Kulawansa",
      description: "University of Moratuwa, Sri Lanka",
      image: "kadt",
    }
  ];

  // const localOC = [
  //   {
  //     name: "TS Nanayakkara",
  //     description: "University of Moratuwa, Sri Lanka",
  //     image: "tsna",
  //   },
  //   {
  //     name: "MTU Sigera",
  //     description: "University of Moratuwa, Sri Lanka",
  //     image: "mtus",
  //   },
  //   {
  //     name: "KBG Samantha",
  //     description: "University of Moratuwa, Sri Lanka",
  //     image: "kbgs",
  //   },
  //   {
  //     name: "C De Alwis",
  //     description: "University of Moratuwa, Sri Lanka",
  //     image: "cdea",
  //   },
  //   {
  //     name: "KAS Gunasekara",
  //     description: "University of Moratuwa, Sri Lanka",
  //     image: "kasg",
  //   },
  //   {
  //     name: "M.M. Udawaththa",
  //     description: "University of Moratuwa, Sri Lanka",
  //     image: "mmud",
  //   }
  // ];

  const studentOC = [
    {
      name: "To Be announced",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    },
    {
      name: "To Be announced",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    },
    {
      name: "To Be announced",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    },
    {
      name: "To Be announced",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    },
    {
      name: "To Be announced",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    },
    {
      name: "To Be announced",
      description: "University of Moratuwa, Sri Lanka",
      image: "mwam",
    }
  ];

  const pubPRChairs = [
    {
      name: "TC Sandanayake",
      description: "University of Moratuwa, Sri Lanka",
      image: "tcsa",
    },

    {
      name: "PGS Upeksha",
      description: "University of Moratuwa, Sri Lanka",
      image: "pgsu",
    },

    {
      name: "BNNT Batagoda",
      description: "University of Moratuwa, Sri Lanka",
      image: "bnnt",
    }
  ];

  const publicationChairs = [
    {
      name: "GU Ganegoda",
      description: "University of Moratuwa, Sri Lanka",
      image: "guga",
    },
    {
      name: "ALARR Thanuja",
      description: "University of Moratuwa, Sri Lanka",
      image: "alar",
    }
  ];

  return (
    <div className="bg-white">
      <Hero
        subtitle={"Meet Our Masterminds<br/>Behind The Success of 9 Years"}
        buttonsVisible={true}
      />

      <div className="container mx-auto py-12">
        {/* <CommitteeGrid 
          people={coChairs} 
          title={"Honorary Co-Chairs"} 
        /> */}

        <CommitteeGrid
          people={intAdvCom}
          title={"International Advisory Committee"}
        />

        <CommitteeGrid 
          people={progChairs} 
          title={"General Co-Chairs"} 
        />

        <CommitteeGrid
          people={confSec}
          title={"Conference Secretary"}
        />

        <CommitteeGrid
          people={techProgCommChairs}
          title={"Technical Program Committee Chairs"}
        />

        <CommitteeGrid
          people={indLiaChairs}
          title={"Industry Liaison Chairs"}
        />

        <CommitteeGrid
          people={pubPRChairs}
          title={"Publicity and Public Relations Chairs"}
        />

        <CommitteeGrid
          people={awardChairs}
          title={"Award Chairs"}
        />

        <CommitteeGrid
          people={financeChairs}
          title={"Publication Chairs"}
        />

        <CommitteeGrid
          people={publicationChairs}
          title={"Finance Chairs"}
        />

        <CommitteeGrid
          people={workshopChairs}
          title={"Workshops & Tutorial Organizing Committee"}
        />

        <CommitteeGrid
          people={localOrgChairs}
          title={"Local Organizing Chairs"}
        />

        {/* <CommitteeGrid
          people={localOC}
          title={"Local Organizing Committee"}
        /> */}

        <CommitteeGrid
          people={studentOC}
          title={"Student Organizing Committee"}
        />
      </div>
      <Footer />
    </div>
  );
}
