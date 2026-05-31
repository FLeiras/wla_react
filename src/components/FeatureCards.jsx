import { Download, ShieldCheck, BookOpen } from "lucide-react";

export default function FeatureCards() {
    const items = [
        {
            title: "Descargar",
            text: "Launcher seguro y siempre actualizado.",
            icon: <Download />,
        },
        {
            title: "Estado del servidor",
            text: "Revisá el estado en tiempo real.",
            icon: <ShieldCheck />,
        },
        {
            title: "Cómo empezar",
            text: "Guía paso a paso para instalar.",
            icon: <BookOpen />,
        },
        {
            title: "Discord / Guild Finder",
            text: "Unite a la comunidad y encontrá hermandad.",
            icon: <i className="fa-brands fa-discord text-3xl" />,
        },
    ];

    return (
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-5 py-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
                <article
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-5 shadow-[inset_0_0_20px_rgba(0,0,0,.25),0_0_20px_rgba(0,0,0,.25)] backdrop-blur-sm"
                >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-500/10 text-blue-300">
                        {item.icon}
                    </div>

                    <h3 className="font-bold uppercase tracking-wide text-slate-100">
                        {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">{item.text}</p>

                    <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-300">
                        Ver más →
                    </a>
                </article>
            ))}
        </section>
    );
}