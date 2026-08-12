import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Legacy from "./components/sections/Legacy";
import Principles from "./components/sections/Principles";
import Collection from "./components/sections/Collection";
import Sustainability from "./components/sections/Sustainability";
import Partners from "./components/sections/Partners";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Legacy />
        <Principles />
        <Collection />
        <Sustainability />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
