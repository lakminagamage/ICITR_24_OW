import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

function Hero({
  subtitle = "10th International Conference<br />on Information Technology Research",
  buttonsVisible = true,
}) {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = React.useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update window size on mount and on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 14000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero" className="bg-white relative">
      <Navbar />
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
      <div
        className=" bg-gradient-blue-green relative isolate overflow-hidden pt-14 bg-fixed bg-center"
        onClick={() => router.push("/")}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-green-primary opacity-60"></div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col items-center relative">
            {/* Neon Border with Logo */}
            <div className="neon-border">
              <img
                className="mb-4 w-48 sm:w-96"
                src="/img/Logo_2025.png"
                alt="Conference Logo 2025"
              />
            </div>
            <span
              className="my-0 sm:my-2 text-xl sm:text-2xl px-4 font-semibold tracking-tight text-gray-primary"
              dangerouslySetInnerHTML={{ __html: subtitle }}
              style={{ lineHeight: "1.8" }}
            />
            <span
              className="my-0 text-md sm:text-lg px-4 tracking-tight text-gray-primary"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{
                __html: `5<sup>th</sup> and 6<sup>th</sup> December 2025<br>University of Moratuwa, Sri Lanka`,
              }}
            ></span>

            {buttonsVisible && (
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a href="https://icitr.uom.lk">
                  <ButtonPrimary text="Explore Conference" />
                </a>
                <ButtonSecondary
                  text="See Tracks"
                  onClick={() => router.push("/paperSubmission/")}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
