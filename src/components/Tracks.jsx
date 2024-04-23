import { PiPathFill } from "react-icons/pi";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
    },
    {
      id: 2,
      title: "Computer Vision",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
    },
    {
      id: 3,
      title: "Computing",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
    },
    {
      id: 4,
      title: "Data Science and Data Driven Applications",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
    },
    {
      id: 5,
      title: "Technology Trends",
      description:
        "Human Computer Interaction, Computer Graphics, Image Processing, Geographic Information Systems, Video Analysis, Augmented Reality, Virtual Reality, Multimedia Systems and Services",
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
        <div className="flex flex-wrap justify-center items-center mt-8">
          {tracks.map((track) => (
            <div
              className="w-72 flex-col justify-center items-start mx-8 my-8"
              key={track.id}
            >
              <div
                className="relative flex justify-center items-center w-72 h-48 rounded-2xl bg-cover bg-center bg-no-repeat bg-opacity-60 px-2"
                style={{
                  backgroundImage: `url('/img/tracks/${track.id}.jpg')`,
                }}
              >
                <div className="z-2 absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
                <p className="z-10 text-white font-semibold text-3xl text-center leading-10">
                  {track.title}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <div className="w- 72 bg-blue-primary rounded-full w-8 h-8 flex justify-center items-center">
                  <PiPathFill className="text-white mx-auto my-auto" />
                </div>
                <span className="text-black-primary text-md ms-2">
                  Covered Areas
                </span>
              </div>
              <p className="mt-2 text-gray-primary text-sm text-justify">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
