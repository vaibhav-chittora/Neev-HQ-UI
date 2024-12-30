import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import TeamMembers from "./components/TeamMembers";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Stats />
        <Testimonials />
        <div className="">
          <TeamMembers />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
