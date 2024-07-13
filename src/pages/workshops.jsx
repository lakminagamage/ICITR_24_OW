import Hero from "@/components/Hero";
import WorkshopLayout from "@/components/WorkshopLayout";
import Footer from "@/components/Footer";

function workshops() {
    return (
        <div className="text-center">
            <Hero subtitle="Join with Our Workshops" />
            <WorkshopLayout/>
            <Footer />
        </div>
    );
}

export default workshops;