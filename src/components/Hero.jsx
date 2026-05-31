import { Download, BookOpen, Users, ShieldCheck, Clock3, Crown } from "lucide-react";
import HeroStat from "./HeroStat";

export default function Hero() {
    return (
        <section className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-16">
            <div className="w-[70%]">
                <h1 className="font-serif text-[clamp(64px,6vw,112px)] font-medium leading-none text-[#f5f7fa] drop-shadow-[0_4px_12px_rgba(0,0,0,.8)]">
                    WotLK 3.3.5a en
                    <br />
                    español para{" "}
                    <span className="bg-gradient-to-b from-[#fff0b8] via-[#ffd56b] to-[#e0931f] bg-clip-text text-transparent">
                        LatAm
                    </span>
                </h1>

                <p className="mt-5 text-lg text-slate-100">
                    x3 · Soporte real · Instalación guiada · Hermandades activas
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-bold shadow-[0_0_20px_rgba(30,124,255,.25)]">
                        <Download size={20} />
                        Descargar Launcher
                    </button>

                    <button className="flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-slate-950/50 px-7 py-4 font-semibold">
                        <BookOpen size={20} />
                        Cómo empezar
                    </button>
                </div>
            </div>

            <div className="w-80 rounded-2xl border border-blue-300/20 bg-slate-950/65 p-6 shadow-[inset_0_0_25px_rgba(0,0,0,.35),0_0_35px_rgba(0,0,0,.45)] backdrop-blur-md">
                <HeroStat icon={<Users size={18} />} value="1,248" label="ONLINE AHORA" />
                <HeroStat icon={<ShieldCheck size={18} />} value="99.6%" label="UPTIME 7D" />
                <HeroStat icon={<Clock3 size={18} />} value="~ 6 MIN" label="ETA DE DESCARGA" />
                <HeroStat icon={<Crown size={18} />} value="17 AÑOS" label="DE LEGADO" gold />
            </div>
        </section>
    );
}