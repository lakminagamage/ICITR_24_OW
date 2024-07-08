import { useState } from "react";
import Hero from "@/components/Hero";
import ButtonPrimary from "@/components/ButtonPrimary";
import Footer from "@/components/Footer";

function pastAbstracts() {
  const abstracts = [
    {
      id: 1,
      title: "Abstracts of Proceedings 2023",
      year: "2023",
      link: "https://heyzine.com/flip-book/89e75d659c.html",
      image: "/img/abstracts/1.png",
      fileName: "/abstracts/abstract-of-the-proceeding-ICITR-2023.pdf",
    },
    {
      id: 2,
      title: "Abstracts of Proceedings 2022",
      year: "2022",
      link: "https://heyzine.com/flip-book/60cffb31d6.html",
      image: "/img/abstracts/2.png",
      fileName: "/abstracts/abstract-of-the-proceeding-ICITR-2022.pdf",
    },
    {
      id: 3,
      title: "Abstracts of Proceedings 2021",
      year: "2021",
      link: "https://heyzine.com/flip-book/f2a19e1e70.html",
      image: "/img/abstracts/3.png",
      fileName: "/abstracts/abstract-of-the-proceeding-ICITR-2021.pdf",
    },
    {
      id: 4,
      title: "Abstracts of Proceedings 2020",
      year: "2020",
      link: "https://heyzine.com/flip-book/8d9307f0e9.html",
      image: "/img/abstracts/4.png",
      fileName: "/abstracts/abstract-of-the-proceeding-ICITR-2020.pdf",
    },
  ];

  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="bg-white">
      <Hero
        subtitle={"Dive into Our Archive<br/>Discover 9 Years of Excellence"}
        buttonsVisible={true}
      />
      <div className="container px-2 md:mx-auto py-12">
        <div className="w-full rounded-lg px-2 md:px-12 py-8 bg-gray-100 border border-blue-primary border-opacity-30 flex flex-col md:flex-row justify-evenly items-center md:space-x-8">
          <div className="md:hidden mb-8">
            <img
              src="/img/icons/gschol.png"
              alt="Abstracts"
              className="w-16 mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <div className="text-xl md:text-2xl font-bold text-blue-primary text-center md:text-left">
              Proceeding Statistics (Google Scholar)
            </div>
            <p className="text-base md:text-md text-gray-primary text-center md:text-left">
              View the statistics of our proceedings on Google Scholar. Find out
              how many times our papers have been cited, and much more.
            </p>
            <div className="mt-2">
              <ButtonPrimary text="View Statistics" />
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/img/icons/gschol.png"
              alt="Abstracts"
              className="w-48 md:w-24"
            />
          </div>
        </div>

        <div className="w-full flex flex-wrap mt-8 justify-center items-center space-x-4 space-y-4">
          {abstracts.map((abstract) => (
            <div
              key={abstract.id}
              className="flex flex-col justify-evenly items-center bg-white  rounded-lg py-4 px-4"
            >
              <img
                src={abstract.image}
                alt={abstract.title}
                className="w-[138px] h-[198px] mb-4 rounded-lg"
              />
              <div className="text-lg font-bold text-blue-primary text-center">
                {abstract.title}
              </div>
              <div className="text-sm text-gray-primary">{abstract.year}</div>
              <div className="mt-4">
                <ButtonPrimary
                  text="View Abstracts"
                  onClick={() => setSelectedDocument(abstract)}
                />
              </div>
            </div>
          ))}
        </div>

        {selectedDocument != null && (
          <div className="w-full flex  flex-col justify-center items-center mt-12">
            <div className="text-2xl font-semibold text-blue-primary text-center">
              {selectedDocument.title}
            </div>
            {/* DOwnload Button */}
            <div className="mt-4">
              <a href={selectedDocument.fileName}>
                <ButtonPrimary text="Download PDF" onClick={() => {}} />
              </a>
            </div>
            <div
              style={{
                paddingTop: "max(60%, 324px)",
              }}
              className="relative w-full md:w-2/3 h-0 rounded-lg border border-blue-primary mt-8"
            >
              <iframe
                style={{
                  position: "absolute",
                  border: "none",
                  width: "100%",
                  height: "100%",
                  left: "0",
                  top: "0",
                }}
                src={selectedDocument.link}
                seamless
                allowTransparency="true"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default pastAbstracts;
