import Image from "next/image";
import Hero from "../components/hero";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <Footer />
    </div>
  );
}
