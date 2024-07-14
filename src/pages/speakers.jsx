import Hero from "@/components/Hero";
import WorkshopLayout from "@/components/WorkshopLayout";
import Footer from "@/components/Footer";

function speakers() {
  const speakersList = [
    {
      name: "Professor Joshi Manohar",
      role: "Professor & HoD",
      university:
        "Department of Electrical and Electronics Engineering, Presidency University, Bangalore, India",
      imageUrl: "img/speakers/joshi.png",
    },
  ];
  return (
    <div className="text-center bg-white">
      <Hero subtitle="Meet the Speakers of the Conference" />
      <div className="container px-2 md:mx-auto py-12">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-blue-primary sm:text-4xl">
            Speakers of The Conference
          </h2>
        </div>
        {/* hr */}
        <div
          className="mx-auto h-0.5 bg-gradient-to-r from-blue-300 to-pink-300 mb-8 mt-5"
          style={{ width: "80%" }}
        />

        <div className="w-full flex flex-wrap justify-center items-center">
          {speakersList.map((speaker, index) => (
            <div className="w-72 h-96 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex justify-center items-center w-full h-60 scale-110">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 flex-grow justify-center items-center w-full mt-2">
                <h3 className="text-lg font-bold text-blue-primary">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 font-semibold">
                  {speaker.role}
                </p>
                <p className="text-xs text-gray-600">{speaker.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default speakers;
