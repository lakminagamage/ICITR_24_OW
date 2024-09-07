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
      image: placeholderImage,
    },
    {
      name: "Prof. Suhaidi Hassan",
      description: "Universiti Utara Malaysia, Malaysia (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Mowafaq Salem Alzboon",
      description: "Jadara University, Jordan",
      image: placeholderImage,
    },
    {
      name: "Dr. Ibrahim Abdullahi",
      description: "Ibrahim Badamasi Babangida University, Nigeria (SIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Walid Elbreiki",
      description: "College of Computer Technology, Benghazi, Libya (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Ikram Ud Din",
      description: "University of Haripur, Pakistan (SMIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Muhammad Ali Naeem",
      description: "Guangdong University of Petrochemical Technology, China",
      image: placeholderImage,
    },
    {
      name: "Dr. Raaid Nasur Kadham Alubady",
      description: "Al-Ayen Iraqi University, Iraq (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Shivaleela Arlimatti",
      description: "Warana University Kolhapur, India",
      image: placeholderImage,
    },
    {
      name: "Dr. Omar Dakkak",
      description: "Karabük University, Turkey",
      image: placeholderImage,
    },
    {
      name: "Dr. Yousef Fazea",
      description: "Marshal University, USA (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Adib Habbal",
      description: "Karabük University, Turkey (SMIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Mohamed Hasbullah Omar",
      description: "Universiti Utara Malaysia, Malaysia (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Shahrudin Awang Nor",
      description: "Universiti Utara Malaysia, Malaysia",
      image: placeholderImage,
    },
    {
      name: "Prof. Jimson Mathew",
      description: "Indian Institute of Technology, Patna, India (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Sushank Chaudhary",
      description: "Guangdong University of Technology, China",
      image: placeholderImage,
    },
    {
      name: "Prof. Mohammad M. Rasheed",
      description:
        "University of Information Technology and Communications, Baghdad, Iraq (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Naseer Ali Hussein",
      description: "Al-Ayen Iraqi University, Iraq (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Chan-Yun Yang",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. C Premachandra",
      description: "Shibaura Institute of Technology, Japan (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. KPN Jayasena",
      description: "Technische Universität Darmstadt, Germany (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. AS Karunananda",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. R Gopura",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Indika Perera",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Gihan Dias",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Prof. Tharinda Nishantha Vidanagama",
      description: "Wayamba University of Sri Lanka (SMIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Asanka P. Sayakkara",
      description: "University of Colombo, Sri Lanka (SMIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. Piumi Ishanka",
      description: "Sabaragamuwa University of Sri Lanka (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. L Ranathunga",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. V Logeeshan",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: placeholderImage,
    },
    {
      name: "Dr. RMM Ruwanthika",
      description: "University of Moratuwa, Sri Lanka (SMIEEE)",
      image: placeholderImage,
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
      image: placeholderImage,
    },
  ];

  const track2CoChairs = [
    {
      name: "Dr. ATP Silva",
      description: "University of Moratuwa, Sri Lanka (MIEEE)",
      image: "atps",
    },
    {
      name: "Dr. H.M.S.N.Ariyadasa",
      description: "Uva Wellassa University, Sri Lanka",
      image: "hmsna",
    },
  ];

  const track2Coordinators = [
    {
      name: "Ms. Adshayani Pirapaharan",
      description: "University of Moratuwa, Sri Lanka",
      image: placeholderImage,
    },
  ];

  const track3CoChairs = [
    {
      name: "Dr. CP Wijesiriwardana",
      description: "University of Moratuwa, Sri Lanka",
      image: "cpwi",
    },
    {
      name: "Dr. PTR.Dabare",
      description: "The Open University of Sri Lanka",
      image: "ptrd",
    },
  ];

  const track3Coordinators = [
    {
      name: "Ms. MN Chandimali",
      description: "University of Moratuwa, Sri Lanka",
      image: placeholderImage,
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
      image: placeholderImage,
    },
  ];

  const track5CoChairs = [
    {
      name: "Dr. CRJ Amalraj",
      description: "University of Moratuwa, Sri Lanka",
      image: "crja",
    },
    {
      name: "Ms. Chathurika Sewwandi Silva",
      description: "University of Colombo, Sri Lanka",
      image: "chathu",
    },
  ];

  const track5Coordinators = [
    {
      name: "Ms. WMRM Wijesuriya",
      description: "University of Moratuwa, Sri Lanka",
      image: placeholderImage,
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
        <CommitteeGrid people={trackCoChairs} title={"Track Co-Chairs"} />

        <CommitteeGrid
          people={trackCoordinators}
          title={"Track Coordinators"}
        />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 2 - Artificial Intelligence
          </h2>
        </div>

        <CommitteeGrid people={track2CoChairs} title={"Track Co-Chairs"} />
        <CommitteeGrid
          people={track2Coordinators}
          title={"Track Coordinators"}
        />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 3 - Computing
          </h2>
        </div>
        <CommitteeGrid people={track3CoChairs} title={"Track Co-Chairs"} />
        <CommitteeGrid
          people={track3Coordinators}
          title={"Track Coordinators"}
        />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 4 - Data Science & Data Driven Applications
          </h2>
          </div>

        <CommitteeGrid people={track4CoChairs} title={"Track Co-Chairs"} />
        <CommitteeGrid
          people={track4Coordinators}
          title={"Track Coordinators"}
        />

        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Track 5 - Cyber Security
          </h2>
          </div>

        <CommitteeGrid people={track5CoChairs} title={"Track Co-Chairs"} />
        <CommitteeGrid
          people={track5Coordinators}
          title={"Track Coordinators"}
        />

      </div>
      <Footer />
    </div>
  );
}

