import { FileText, HelpCircle, Ticket, Users } from "lucide-react";

export default function BottomGrid() {
    return (
        <section className="mx-auto grid max-w-[1400px] grid-cols-[2fr_1.6fr_1.5fr] gap-5 px-5 py-3">
            <article className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="mb-4 text-sm font-bold uppercase text-blue-200">Seguridad y juego limpio</h3>
                <div className="grid grid-cols-4 gap-4 text-sm">
                    {["2FA", "Anti-Cheat", "Backups", "Privacidad"].map((item) => (
                        <div key={item}>{item}</div>
                    ))}
                </div>
            </article>

            <article className="rounded-xl border border-yellow-500/40 bg-yellow-950/30 p-5">
                <h3 className="font-bold uppercase text-yellow-200">Apoya al proyecto</h3>
                <p className="mt-2 text-sm text-slate-200">Tu apoyo nos permite mantener y mejorar el servidor.</p>
                <a href="#" className="mt-4 inline-block font-semibold text-yellow-300">Ver opciones de apoyo →</a>
            </article>

            <article className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="mb-4 text-sm font-bold uppercase text-blue-200">¿Necesitas ayuda?</h3>
                <div className="grid grid-cols-4 gap-3 text-center text-xs">
                    {[
                        ["FAQ", HelpCircle],
                        ["Tickets", Ticket],
                        ["Discord", Users],
                        ["Guías", FileText],
                    ].map(([label, Icon]) => (
                        <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <Icon className="mx-auto mb-2 text-blue-300" size={22} />
                            {label}
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}