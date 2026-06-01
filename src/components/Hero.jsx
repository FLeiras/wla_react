import {
  BookOpen,
  Crown,
  Download,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";
import HeroStat from "./HeroStat";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-16">
      <div className="w-full lg:w-[70%]">
        <img
          src="/assets/wotlk-title-transparent_3.png"
          alt="WotLK 3.3.5a en español para LatAm"
          className="block w-full max-w-[720px] select-none drop-shadow-[0_4px_12px_rgba(0,0,0,.8)]"
          draggable="false"
        />

        <p className="mt-1 text-base text-slate-100 sm:text-lg">
          x3 · Soporte real · Instalación guiada · Hermandades activas
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-bold text-white shadow-[0_0_20px_rgba(30,124,255,.25)]">
            <Download size={20} />
            Descargar Launcher
          </button>

          <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-white/20 bg-slate-950/50 px-7 py-4 font-semibold text-white">
            <BookOpen size={20} />
            Cómo empezar
          </button>
        </div>
      </div>

      <div className="w-full rounded-2xl border border-blue-300/20 bg-slate-950/65 p-6 shadow-[inset_0_0_25px_rgba(0,0,0,.35),0_0_35px_rgba(0,0,0,.45)] backdrop-blur-md sm:max-w-sm lg:w-80">
        <HeroStat
          icon={<Users size={18} />}
          value="1,248"
          label="ONLINE AHORA"
        />
        <HeroStat
          icon={<ShieldCheck size={18} />}
          value="99.6%"
          label="UPTIME 7D"
        />
        <HeroStat
          icon={<Clock3 size={18} />}
          value="~ 6 MIN"
          label="ETA DE DESCARGA"
        />
        <HeroStat
          icon={<Crown size={18} />}
          value="17 AÑOS"
          label="DE LEGADO"
          gold
        />
      </div>
    </section>
  );
}
