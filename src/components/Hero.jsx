import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";

function Hero({
  subtitle = "10th International Conference<br />on Information Technology Research",
  buttonsVisible = true,
}) {
  const router = useRouter();
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
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti burst
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
      });
    }, 250); // Interval between bursts

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="bg-white relative">
      <Navbar />
      <div
        className="bg-gradient-blue-green relative isolate overflow-hidden pt-14 bg-fixed bg-center"
        onClick={() => router.push("/")}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-green-primary opacity-60"></div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col items-center relative">
            {/* Neon Border with Logo */}
            <div >
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
