import { PiPathFill } from "react-icons/pi";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "Track 1 | Computer Vision",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
    },
    {
      id: 2,
      title: "Track 2 | Artificial Intelligence",
      description:
        "Deep Learning, Agents and Multi-Agent Systems, Decision Making, Machine Learning, Large language models, Explainable AI, Responsible AI, Neural Networks, Pattern Recognition, Expert Systems, Natural Language Processing, Intelligent Systems, Reinforcement Learning, Semantic Web, Ontology Modelling",
    },
    {
      id: 3,
      title: "Track 3 | Computing",
      description:
        "Quantum Computing, Cognitive Computing, High Performance Computing, Distributed and Parallel Systems, Social Computing, Cloud Computing, Grid Computing, Human-Centered Computing, Complex Systems, Mobile Networking, Embedded Systems, Mobile and Wireless Security, High Performance Computing, Parallel Computing, Distributed Computing",
    },
    {
      id: 4,
      title: "Track 4 | Data Science and Data Driven Applications",
      description:
        "Data Mining and Data Warehousing, Big Data, Data Analytics, Sentiment Analysis, Fuzzy Logic, Data Fusion, Social Network Models, Information Retrieval, Mathematical Modelling, Statistical Modelling, Health Informatics, Bioinformatics, Social Behavioral Modeling, Decision Making, Risk Management",
    },
    {
      id: 5,
      title: "Track 5 | Technology Trends",
      description:
        "Internet of Things, Blockchain, Robotics, Digital Transformation, Software Engineering, Software Quality Assurance, Cloud Networking, Mobile Applications",
    },
  ];
  return (
    <div
      id="tracks"
      className="w-full pt-16 pb-12 bg-cover bg-fixed bg-center relative"
      style={{ backgroundImage: `url('/img/back_1.jpg')` }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex-col justify-center">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-center text-blue-primary sm:text-4xl">
            ICITR 2024 Tracks
          </h2>
          <p className="flex justify-center mt-2 text-lg leading-8 text-center text-gray-primary">
            The ICITR 2024 welcomes full papers from the below themes, but they
            are not restricted to the following
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start mt-5">
          {tracks.map((track) => (
            <article
              key={track.id}
              className="relative isolate flex flex-col gap-x-10 gap-y-6 lg:flex-row mt-4"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink- ">
                <img
                  src={`/img/tracks/${track.id}.jpg`}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="group relative max-w-xl ">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 duration-300 transition-all ease-in-out">
                    <p>
                      <span className="absolute inset-0" />
                      {track.title}
                    </p>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-800">
                    {track.description}
                  </p>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
