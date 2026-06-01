import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import InfoStrip from "./components/InfoStrip";
import Dashboard from "./components/Dashboard";
import BottomGrid from "./components/BottomGrid";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <InfoStrip />
      <Dashboard />
      <BottomGrid />
    </>
  );
}

function ComoEmpezar() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20">
      <h1 className="text-5xl font-bold text-white">Cómo empezar</h1>
      <p className="mt-4 text-slate-300">
        Próximamente vamos a poner acá la guía completa de instalación.
      </p>
    </section>
  );
}

function EstadoServidor() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20">
      <h1 className="text-5xl font-bold text-white">Estado del servidor</h1>
      <p className="mt-4 text-slate-300">
        Acá podemos mostrar login server, world server, uptime y jugadores
        online.
      </p>
    </section>
  );
}

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

      <div className="mx-auto min-h-screen w-full border border-blue-300/15 shadow-[0_0_0_1px_rgba(0,0,0,.8),inset_0_0_50px_rgba(0,0,0,.25),0_0_80px_rgba(0,0,0,.6)] md:w-[calc(100%-40px)] xl:w-[min(calc(100%-140px),1600px)]">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-empezar" element={<ComoEmpezar />} />
            <Route path="/estado" element={<EstadoServidor />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}
