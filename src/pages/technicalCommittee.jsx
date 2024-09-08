import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CommitteeGrid from "@/components/CommitteeGrid";

export default function Committee() {
  const placeholderImage = "profile";

  const techProgCommChairs = [
    {
      name: "Dr. MFM Firdhous (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "mfmf",
    },
  ];

  const techProgCommMembers = [
    {
      name: "Prof. Rahmat Budiarto",
      description: "Al-Baha University, Saudi Arabia (MIEEE)",
      image: "Rahmat",
    },
    {
      name: "Prof. Suhaidi Hassan",
      description: "Universiti Utara Malaysia, Malaysia (MIEEE)",
      image: "suhaidi",
    },
    {
      name: "Dr. Mowafaq Salem Alzboon",
      description: "Jadara University, Jordan",
      image: "mowafaq",
    },
    {
      name: "Dr. Ibrahim Abdullahi",
      description: "Ibrahim Badamasi Babangida University, Nigeria (SIEEE)",
      image: "ibrahim",
    },
    {
      name: "Dr. Walid Elbreiki",
      description: "College of Computer Technology, Benghazi, Libya (MIEEE)",
      image: "walid",
    },
    {
      name: "Dr. Ikram Ud Din",
      description: "University of Haripur, Pakistan (SMIEEE)",
      image: "ikram",
    },
    {
      name: "Dr. Muhammad Ali Naeem",
      description: "Guangdong University of Petrochemical Technology, China",
      image: "naeem",
    },
    {
      name: "Dr. Raaid Nasur Kadham Alubady",
      description: "Al-Ayen Iraqi University, Iraq (MIEEE)",
      image: "raaid",
    },
    {
      name: "Prof. Shivaleela Arlimatti",
      description: "Warana University Kolhapur, India",
      image: "shivaleela",
    },
    {
      name: "Dr. Omar Dakkak",
      description: "Karabük University, Turkey",
      image: "omar",
    },
    {
      name: "Dr. Yousef Fazea",
      description: "Marshal University, USA (MIEEE)",
      image: "yousef",
    },
    {
      name: "Prof. Adib Habbal",
      description: "Karabük University, Turkey (SMIEEE)",
      image: "adib",
    },
    {
      name: "Prof. Mohamed Hasbullah Omar",
      description: "Universiti Utara Malaysia, Malaysia (MIEEE)",
      image: "hasbullah",
    },
    {
      name: "Dr. Shahrudin Awang Nor",
      description: "Universiti Utara Malaysia, Malaysia",
      image: "shahrudin",
    },
    {
      name: "Prof. Jimson Mathew",
      description: "Indian Institute of Technology, Patna, India (MIEEE)",
      image: "jimson",
    },
    {
      name: "Prof. Sushank Chaudhary (SMIEEE)",
      description: "Guangdong University of Technology, China",
      image: "sushank",
    },
    {
      name: "Prof. Mohammad M. Rasheed",
      description:
        "University of Information Technology and Communications, Baghdad, Iraq (MIEEE)",
      image: "rasheed",
    },
    {
      name: "Prof. Naseer Ali Hussein",
      description: "Al-Ayen Iraqi University, Iraq (MIEEE)",
      image: "naseer",
    },
    {
      name: "Prof. Chan-Yun Yang",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "chan",
    },
    {
      name: "Prof. C Premachandra",
      description: "Shibaura Institute of Technology, Japan (MIEEE)",
      image: "premachandra",
    },
    {
      name: "Dr. KPN Jayasena",
      description: "Technische Universität Darmstadt, Germany (MIEEE)",
      image: "jayasena",
    },
    {
      name: "Prof. AS Karunananda",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "karunananda",
    },
    {
      name: "Prof. R Gopura",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: "gopura",
    },
    {
      name: "Prof. Indika Perera",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "indika",
    },
    {
      name: "Prof. Gihan Dias",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "gihan",
    },
    {
      name: "Prof. Tharinda Nishantha Vidanagama",
      description: "Wayamba University of Sri Lanka (SMIEEE)",
      image: "tharinda",
    },
    {
      name: "Dr. Asanka P. Sayakkara",
      description: "University of Colombo, Sri Lanka (SMIEEE)",
      image: "asanka",
    },
    {
      name: "Dr. Piumi Ishanka",
      description: "Sabaragamuwa University of Sri Lanka (MIEEE)",
      image: "piumi",
    },
    {
      name: "Dr. L Ranathunga",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "lochandaka",
    },
    {
      name: "Dr. V Logeeshan",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: "logeeshan",
    },
    {
      name: "Dr. RMM Ruwanthika",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: "ruwanthika",
    },
  ];

  const trackCoChairs = [
    {
      name: "Dr. SC Premaratne",
      description: "University of Moratuwa, Sri Lanka",
      image: "scpr",
    },
    {
      name: "Dr. Ravimal Bandara",
      description: "University of Sri Jayewardenepura, Sri Lanka",
      image: "ravimal",
    },
  ];

  const trackCoordinators = [
    {
      name: "Mr. Dilumika Navodya",
      description: "University of Moratuwa, Sri Lanka",
      image: "dilumika",
    },
  ];

  const track2CoChairs = [
    {
      name: "Dr. ATP Silva",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "atps",
    },
    {
      name: "Dr. HMSN Ariyadasa",
      description: "Uva Wellassa University, Sri Lanka",
      image: "hmsna",
    },
  ];

  const track2Coordinators = [
    {
      name: "Ms. Adshayani Pirapaharan",
      description: "University of Moratuwa, Sri Lanka",
      image: "adshayani",
    },
  ];

  const track3CoChairs = [
    {
      name: "Dr. CP Wijesiriwardana",
      description: "University of Moratuwa, Sri Lanka",
      image: "cpwi",
    },
    {
      name: "Dr. PTR Dabare",
      description: "The Open University of Sri Lanka",
      image: "ptrd",
    },
  ];

  const track3Coordinators = [
    {
      name: "Ms. MN Chandimali",
      description: "University of Moratuwa, Sri Lanka",
      image: "chandimali",
    },
  ];

  const track4CoChairs = [
    {
      name: "Dr. S Ahangama",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: "saha",
    },
    {
      name: "Dr. Sandun M. Dassanayake",
      description: "University of Moratuwa, Sri Lanka",
      image: "sandun",
    },
  ];

  const track4Coordinators = [
    {
      name: "Ms. PGS Upeksha",
      description: "University of Moratuwa, Sri Lanka",
      image: "upeksha",
    },
  ];

  const track5CoChairs = [
    {
      name: "Dr. CRJ Amalraj",
      description: "University of Moratuwa, Sri Lanka",
      image: "crja",
    },
    {
      name: "Dr. Chathurika Sewwandi Silva",
      description: "University of Colombo, Sri Lanka",
      image: "chathu",
    },
  ];

  const track5Coordinators = [
    {
      name: "Ms. WMRM Wijesuriya",
      description: "University of Moratuwa, Sri Lanka",
      image: "wijesuriya",
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        subtitle={"Meet Our Masterminds<br/>Behind The Success of 9 Years"}
        buttonsVisible={true}
      />

      <div className="container mx-auto py-12">
        <CommitteeGrid
          people={techProgCommChairs}
          title={"Technical Program Committee Chair"}
        />

        <CommitteeGrid
          people={techProgCommMembers}
          title={"Technical Program Committee Members"}
        />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 1 - Computer Vision
          </h2>
        </div>
        <CommitteeGrid people={trackCoChairs} title={"Co-Chairs"} />

        <CommitteeGrid people={trackCoordinators} title={"Coordinator"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 2 - Artificial Intelligence
          </h2>
        </div>

        <CommitteeGrid people={track2CoChairs} title={"Co-Chairs"} />
        <CommitteeGrid people={track2Coordinators} title={"Coordinator"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 3 - Computing
          </h2>
        </div>
        <CommitteeGrid people={track3CoChairs} title={"Co-Chairs"} />
        <CommitteeGrid people={track3Coordinators} title={"Coordinator"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 4 - Data Science & Data Driven Applications
          </h2>
        </div>

        <CommitteeGrid people={track4CoChairs} title={"Co-Chairs"} />
        <CommitteeGrid people={track4Coordinators} title={"Coordinator"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 5 - Technology Trends
          </h2>
        </div>

        <CommitteeGrid people={track5CoChairs} title={"Co-Chairs"} />
        <CommitteeGrid people={track5Coordinators} title={"Coordinator"} />
      </div>
      <Footer />
    </div>
  );
}
