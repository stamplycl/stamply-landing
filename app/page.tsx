import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Modules from "@/components/Modules";
import Office from "@/components/Office";
import Integrations from "@/components/Integrations";
import Legal from "@/components/Legal";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Office />
        <Integrations />
        <Legal />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
