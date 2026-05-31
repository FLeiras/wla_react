import { ShieldCheck, Headphones, CalendarDays, Globe2 } from "lucide-react";

export default function InfoStrip() {
    const items = [
        {
            icon: <ShieldCheck size={24} />,
            title: "Instalación guiada",
            text: "Paso a paso, sin complicaciones.",
        },
        {
            icon: <Headphones size={24} />,
            title: "Soporte humano",
            text: "Respuestas reales en español.",
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "2FA y seguridad",
            text: "Tu progreso protegido.",
        },
        {
            icon: <CalendarDays size={24} />,
            title: "Eventos semanales",
            text: "PvP, PvE y actividades.",
        },
        {
            icon: <Globe2 size={24} />,
            title: "Hecho para LatAm",
            text: "Servidores en la región.",
        },
    ];

    return (
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-5 py-3 sm:grid-cols-2 lg:grid-cols-5">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/55 p-4 shadow-[inset_0_0_20px_rgba(0,0,0,.25)]"
                >
                    <div className="text-blue-300">{item.icon}</div>

                    <div>
                        <h4 className="font-semibold text-slate-100">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.text}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}