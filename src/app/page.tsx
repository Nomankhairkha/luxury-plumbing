import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import QuoteCalculator from "@/components/QuoteCalculator";
import EmergencyCTA from "@/components/EmergencyCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <main className="bg-[#0B1120] text-white">
     <Navbar />
<Hero />
<Stats />
<Services />
<About />
<Showcase />
<Testimonials />
<QuoteCalculator />
<Contact />
<EmergencyCTA />
<Footer />
    </main>
  );
}