import Panel from "./Panel";

export default function Dashboard() {
    return (
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-5 py-3 md:grid-cols-2 xl:grid-cols-4">
            <Panel title="Cómo empezar">
                {[
                    "Crear cuenta",
                    "Descargar launcher",
                    "Elegir cliente",
                    "Verificar y reparar",
                    "Entrar a jugar",
                ].map((step, index) => (
                    <div
                        key={step}
                        className="flex items-center gap-3 border-b border-white/10 py-2 last:border-0"
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/20 text-sm font-bold text-blue-200">
                            {index + 1}
                        </span>
                        <span className="text-sm text-slate-200">{step}</span>
                    </div>
                ))}
            </Panel>

            <Panel title="Estado del servidor">
                {["Login Server", "World Server", "Tienda", "Web y Servicios"].map(
                    (service) => (
                        <div
                            key={service}
                            className="flex items-center justify-between border-b border-white/10 py-2 text-sm last:border-0"
                        >
                            <span className="text-slate-200">{service}</span>
                            <span className="text-green-300">Online</span>
                        </div>
                    )
                )}
            </Panel>

            <Panel title="Comunidad · Guild Finder">
                {["Furia del Norte", "Legión de Hielo", "Hijos de Arthas"].map(
                    (guild) => (
                        <div
                            key={guild}
                            className="mb-3 rounded-lg border border-white/10 bg-blue-950/30 p-3"
                        >
                            <h4 className="font-semibold text-slate-100">{guild}</h4>
                            <p className="text-xs text-slate-300">
                                Alianza · PvE · Reclutando
                            </p>
                        </div>
                    )
                )}
            </Panel>

            <Panel title="Noticias y eventos">
                {[
                    "Evento: Corona de Hielo",
                    "Mantenimiento programado",
                    "Ladder de Arena 2v2",
                ].map((news) => (
                    <div
                        key={news}
                        className="mb-3 rounded-lg border border-white/10 bg-slate-900/50 p-3"
                    >
                        <h4 className="font-semibold text-slate-100">{news}</h4>
                        <p className="text-xs text-slate-300">Hace 2 horas</p>
                    </div>
                ))}
            </Panel>
        </section>
    );
}