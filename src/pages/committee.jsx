import Hero from "@/components/Hero";
import PersonCard from "@/components/PersonCard";
import CommitteeGrid from "@/components/CommitteeGrid";

export default function Committee() {
  const coChairs = [
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
  ];

  const intAdvCom = [
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
  ];

  const progChairs = [
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
  ];

  const techProgCommChairs = [
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
  ];

  const indLiaChairs = [
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
    {
      name: "John Doe",
      description: "ISILC, Victoria University, Melbourne, Australia",
      image: "1",
    },
    {
      name: "Jane Doe",
      description:
        "University of Applied Sciences and Arts of Southern Switzerland (Italian: Scuola universitaria professionale della Svizzera italiana, SUPSI), Switzerland",
      image: "2",
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        subtitle={"Meet Our Masterminds<br/>Behind The Success of 9 Years"}
        buttonsVisible={true}
      />
      <div className="container mx-auto py-12">
        <CommitteeGrid people={coChairs} title={"Honorary Co-Chairs"} />
        <CommitteeGrid
          people={intAdvCom}
          title={"International Advisory Committee"}
        />
        <CommitteeGrid people={progChairs} title={"Program Chairs"} />
        <CommitteeGrid
          people={techProgCommChairs}
          title={"Technical Program Committee Chairs"}
        />
        <CommitteeGrid
          people={indLiaChairs}
          title={"Industry Liaison Chairs"}
        />
      </div>
    </div>
  );
}
