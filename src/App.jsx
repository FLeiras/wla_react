import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import InfoStrip from "./components/InfoStrip";
import Dashboard from "./components/Dashboard";
import BottomGrid from "./components/BottomGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#061321] text-white isolate">
      <video
        className="fixed inset-0 -z-30 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,.45)_55%,rgba(0,0,0,1)_100%),linear-gradient(to_bottom,rgba(0,0,0,.55)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,.85)_100%)]" />

      <div className="mx-auto min-h-screen w-[min(calc(100%-140px),1600px)] border border-blue-300/15 shadow-[0_0_0_1px_rgba(0,0,0,.8),inset_0_0_50px_rgba(0,0,0,.25),0_0_80px_rgba(0,0,0,.6)] max-xl:w-[calc(100%-40px)] max-md:w-full">
        <Header />
        <main>
          <Hero />
          <FeatureCards />
          <InfoStrip />
          <Dashboard />
          <BottomGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}