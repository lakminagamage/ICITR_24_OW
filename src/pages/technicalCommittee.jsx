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
      description: "University of Information Technology and Communications, Baghdad, Iraq (MIEEE)",
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
      </div>
      <Footer />
    </div>
  );
}