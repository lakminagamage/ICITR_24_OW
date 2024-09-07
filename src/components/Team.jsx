const people = [
  {
    name: "Sam Altman",
    role: "CEO & Co-Founder - OpenAI",
    imageUrl: "/img/speakers/person1.jpeg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sam Altman",
    role: "CEO & Co-Founder - OpenAI",
    imageUrl: "/img/speakers/person2.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sam Altman",
    role: "CEO & Co-Founder - OpenAI",
    imageUrl: "/img/speakers/person1.jpeg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sam Altman",
    role: "CEO & Co-Founder - OpenAI",
    imageUrl: "/img/speakers/person2.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sam Altman",
    role: "CEO & Co-Founder - OpenAI",
    imageUrl: "/img/speakers/person1.jpeg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sam Altman",
    role: "CEO & Co-Founder - OpenAI",
    imageUrl: "/img/speakers/person2.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  const speakersList = [
    {
      name: "Prof. Rahmat Budiarto",
      role: "",
      university:
        "College of Computer Science and Information Technology, Al-Baha University, Saudi Arabia",
      imageUrl: "img/speakers/Rahmat.jpg",
    },
    {
      name: "Professor Takahiro Yabe",
      role: "",
      university:
        "Tandon School of Engineering, Department of Technology Management and Innovation (TMI) & Center for Urban Science and Progress (CUSP), New York University, USA",
      imageUrl: "img/speakers/taka.jpg",
    },
    {
      name: "Professor Joshi Manohar",
      role: "",
      university:
        "Department of Electrical and Electronics Engineering, Presidency University, Bangalore, India",
      imageUrl: "img/speakers/profjoshi.jpg",
    },
  ];

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center tracking-tight text-blue-primary sm:text-4xl">
            Keynote Speakers
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center text-center mt-12">
          {speakersList.map((speaker, index) => (
            <div className="w-72 h-96 bg-white border border-gray-300 rounded-lg overflow-hidden mx-6">
              <div className="flex justify-center items-center w-full h-60 scale-110">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 flex-grow justify-center items-center w-full mt-2">
                <h3 className="text-lg font-bold text-blue-primary">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mt-2">
                  {speaker.role}
                </p>
                <p className="text-xs text-gray-600">{speaker.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
