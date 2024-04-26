import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clock from "@/components/Clock";
import EventDescription from "@/components/EventDescription";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Clock />
      <EventDescription />
      <PhotoGallery />
    </div>
  );
}
