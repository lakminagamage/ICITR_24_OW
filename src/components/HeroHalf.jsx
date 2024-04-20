import Navbar from "@/components/Navbar";

function HeroHalf({
  subtitle = "9th International Conference<br />on Information Technology Research",
  buttonsVisible = true,
}) {
  return (
    <div id="hero" className="bg-white">
      <Navbar />
      <div
        className="relative h-[400px] isolate overflow-hidden bg-cover bg-fixed bg-center flex justify-center items-center pt-28"
        style={{ backgroundImage: `url('/img/hero_back.png')` }}
      >
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col items-center">
            <img
              className="mb-4 w-48 sm:w-96"
              src="/img/logo.png"
              //   width={350}
              //   height={250}
              alt=""
            />
            <span
              className="my-0 sm:my-2 text-2xl sm:text-4xl px-4 tracking-tight text-black-primary"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            {buttonsVisible && (
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a href="#">
                  <ButtonPrimary
                    text="Submit Papers"
                    onClick={() => {}}
                  ></ButtonPrimary>
                </a>
                <a href="#">
                  <ButtonSecondary text="See Tracks" onClick={() => {}} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHalf;
