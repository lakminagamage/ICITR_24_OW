import { PiPathFill } from "react-icons/pi";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "Computer Vision",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      description:
        "Deep Learning, Agents and Multi-Agent Systems, Decision Making, Machine Learning, Large language models, Explainable AI, Responsible AI, Neural Networks, Pattern Recognition, Expert Systems, Natural Language Processing, Intelligent Systems, Reinforcement Learning, Semantic Web, Ontology Modelling",
    },
    {
      id: 3,
      title: "Computing",
      description:
        "Quantum Computing, Cognitive Computing, High Performance Computing, Distributed and Parallel Systems, Social Computing, Cloud Computing, Grid Computing, Human-Centered Computing, Complex Systems, Mobile Networking, Embedded Systems, Mobile and Wireless Security, High Performance Computing, Parallel Computing, Distributed Computing",
    },
    {
      id: 4,
      title: "Data Science and Data Driven Applications",
      description:
        "Data Mining and Data Warehousing, Big Data, Data Analytics, Sentiment Analysis, Fuzzy Logic, Data Fusion, Social Network Models, Information Retrieval, Mathematical Modelling, Statistical Modelling, Health Informatics, Bioinformatics, Social Behavioral Modeling, Decision Making, Risk Management",
    },
    {
      id: 5,
      title: "Technology Trends",
      description:
        "Internet of Things, Blockchain, Robotics, Digital Transformation, Software Engineering, Software Quality Assurance, Cloud Networking, Mobile Applications",
    },
  ];
  return (
    <div
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
            Explore and present your expertise in these key fields
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start mt-8">
          {tracks.map((track) => (
            <article key={track.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                style={{
                    backgroundImage: `url('/img/tracks/${track.id}.jpg')`,
                  }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                
                <a
                  href={track.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {track.category.title}
                </a>
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={track.href}>
                    <span className="absolute inset-0" />
                    {track.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{track.description}</p>
              </div>
              <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                <div className="relative flex items-center gap-x-4">
                  
                  
                </div>
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
