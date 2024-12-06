import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clock from "@/components/Clock";
import EventDescription from "@/components/EventDescription";
import PhotoGallery from "@/components/PhotoGallery";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      
      <ContactForm />
      <Footer />
    </div>
  );
}
