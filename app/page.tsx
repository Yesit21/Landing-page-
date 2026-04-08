import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Bestsellers from "./components/Bestsellers";
import OurPromise from "./components/OurPromise";
import MagicalTicket from "./components/MagicalTicket";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <Bestsellers />
      <OurPromise />
      <MagicalTicket />
      <Footer />
    </div>
  );
}
