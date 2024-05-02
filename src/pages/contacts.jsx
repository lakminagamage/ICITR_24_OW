import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

function contacts() {
    return (
        <div className="text-center">
            <Hero subtitle="Contact Us for Further Support" />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default contacts;