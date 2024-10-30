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
      description: "Al-Baha University, Saudi Arabia",
      image: "Rahmat",
    },
    {
      name: "Prof. Suhaidi Hassan",
      description: "Universiti Utara Malaysia, Malaysia",
      image: "suhaidi",
    },
    {
      name: "Dr. Mowafaq Salem Alzboon",
      description: "Jadara University, Jordan",
      image: "mowafaq",
    },
    {
      name: "Dr. Ibrahim Abdullahi",
      description: "Ibrahim Badamasi Babangida University, Nigeria",
      image: "ibrahim",
    },
    {
      name: "Dr. Walid Elbreiki",
      description: "College of Computer Technology, Benghazi, Libya",
      image: "walid",
    },
    {
      name: "Dr. Ikram Ud Din",
      description: "University of Haripur, Pakistan",
      image: "ikram",
    },
    {
      name: "Dr. Muhammad Ali Naeem",
      description: "Guangdong University of Petrochemical Technology, China",
      image: "naeem",
    },
    {
      name: "Dr. Raaid Nasur Kadham Alubady",
      description: "Al-Ayen Iraqi University, Iraq",
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
      description: "Marshal University, USA",
      image: "yousef",
    },
    {
      name: "Prof. Adib Habbal",
      description: "Karabük University, Turkey",
      image: "adib",
    },
    {
      name: "Prof. Mohamed Hasbullah Omar",
      description: "Universiti Utara Malaysia, Malaysia",
      image: "hasbullah",
    },
    {
      name: "Dr. Shahrudin Awang Nor",
      description: "Universiti Utara Malaysia, Malaysia",
      image: "shahrudin",
    },
    {
      name: "Prof. Jimson Mathew",
      description: "Indian Institute of Technology, Patna, India",
      image: "jimson",
    },
    {
      name: "Prof. Sushank Chaudhary",
      description: "Guangdong University of Technology, China",
      image: "sushank",
    },
    {
      name: "Prof. Mohammad M. Rasheed",
      description:
        "University of Information Technology and Communications, Baghdad, Iraq",
      image: "rasheed",
    },
    {
      name: "Prof. Naseer Ali Hussein",
      description: "Al-Ayen Iraqi University, Iraq",
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
      description: "Sabaragamuwa University of Sri Lanka",
      image: "piumi",
    },
    {
      name: "Dr. L Ranathunga",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "lochandaka",
    },
    {
      name: "Dr. V Logeeshan",
      description: "University of Moratuwa, Sri Lanka",
      image: "logeeshan",
    },
    {
      name: "Dr. RMM Ruwanthika",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: "ruwanthika",
    },
  ];

  const track1Chairs = [
    {
      name: "Dr. SC Premaratne (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "scpr",
    },
  ];

  const track1CoChairs = [
    {
      name: "Dr. Ravimal Bandara",
      description: "University of Sri Jayewardenepura, Sri Lanka",
      image: "ravimal",
    },
  ];

  const track2Chairs = [
    {
      name: "Dr. ATP Silva (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "atps",
    },
  ];

  const track2CoChairs = [
    {
      name: "Dr. HMSN Ariyadasa",
      description: "Uva Wellassa University, Sri Lanka",
      image: "hmsna",
    },
  ];

  const track3Chairs = [
    {
      name: "Dr. CP Wijesiriwardana (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "cpwi",
    },
  ];

  const track3CoChairs = [
    {
      name: "Dr. PTR Dabare",
      description: "The Open University of Sri Lanka",
      image: "ptrd",
    },
  ];

  const track4Chairs = [
    {
      name: "Dr. S Ahangama (SMIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "saha",
    },
  ];

  const track4CoChairs = [
    {
      name: "Dr. Sandun M. Dassanayake",
      description: "University of Moratuwa, Sri Lanka",
      image: "sandun",
    },
  ];

  const track5Chairs = [
    {
      name: "Dr. CRJ Amalraj (MIEEE)",
      description: "University of Moratuwa, Sri Lanka",
      image: "crja",
    },
  ];

  const track5CoChairs = [
    {
      name: "Dr. Chathurika Sewwandi Silva",
      description: "University of Colombo, Sri Lanka",
      image: "chathu",
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
        <CommitteeGrid people={track1Chairs} title={"Chair"} />
        <CommitteeGrid people={track1CoChairs} title={"Co-Chair"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 2 - Artificial Intelligence
          </h2>
        </div>
        <CommitteeGrid people={track2Chairs} title={"Chair"} />
        <CommitteeGrid people={track2CoChairs} title={"Co-Chair"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 3 - Computing
          </h2>
        </div>
        <CommitteeGrid people={track3Chairs} title={"Chair"} />
        <CommitteeGrid people={track3CoChairs} title={"Co-Chair"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 4 - Data Science and Data Driven Applications
          </h2>
        </div>
        <CommitteeGrid people={track4Chairs} title={"Chair"} />
        <CommitteeGrid people={track4CoChairs} title={"Co-Chair"} />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 5 - Technology Trends
          </h2>
        </div>
        <CommitteeGrid people={track5Chairs} title={"Chair"} />
        <CommitteeGrid people={track5CoChairs} title={"Co-Chair"} />
      </div>
      <Footer />
    </div>
  );
}
