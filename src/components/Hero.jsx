import Navbar from "@/components/Navbar";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";

function Hero({
  subtitle = "9th International Conference<br />on Information Technology Research",
  buttonsVisible = true,
}) {
  const router = useRouter();
  return (
    <div id="hero" className="bg-white">
      <Navbar />
      <div
        className="relative isolate overflow-hidden pt-14 bg-cover bg-fixed bg-center"
        onClick={() => {
          router.push("/");
        }}
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
              className="my-0 sm:my-2 text-xl sm:text-2xl px-4 font-semibold tracking-tight text-black-primary"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <span
              className="my-0  text-md sm:text-lg px-4 tracking-tight text-black-primary"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{
                __html: `5<sup>th</sup> and 6<sup>th</sup> December 2024<br>University of Moratuwa, Sri Lanka`,
              }}
            ></span>

            {buttonsVisible && (
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a href="https://icitr.uom.lk">
                  <ButtonPrimary
                    text="Registrations Closed"
                    
                  ></ButtonPrimary>
                </a>
                <p>
                  <ButtonSecondary
                    text="See Tracks"
                    onClick={() => {
                      router.push("/paperSubmission/");
                    }}
                  />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
