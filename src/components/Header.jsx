import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        "Inicio",
        "Cómo empezar",
        "Estado",
        "Servidor",
        "Comunidad",
        "Soporte",
        "Cuenta",
    ];

    return (
        <header className="relative mx-auto max-w-[1400px] px-5 py-4">
            {/* Mobile */}
            <div className="flex items-center justify-between lg:hidden">
                <img
                    src="/assets/logo_sin_fondo.png"
                    alt="WLA Logo"
                    className="h-16 w-auto"
                />

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg border border-white/10 bg-slate-900/80 p-2"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-cols-[240px_1fr_340px] lg:items-center">
                <img
                    src="/assets/logo_sin_fondo.png"
                    alt="WLA Logo"
                    className="h-24 w-auto drop-shadow-[0_0_10px_rgba(0,153,255,.5)]"
                />

                <nav className="flex items-center justify-center gap-5 text-[12px] font-semibold text-slate-100">
                    {menuItems.map((item, index) => (
                        <a
                            key={item}
                            href="#"
                            className={`whitespace-nowrap transition hover:text-blue-300 ${index === 0
                                    ? "border-b-2 border-blue-400 pb-2"
                                    : ""
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex justify-end gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-indigo-400/35 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white">
                        <i className="fa-brands fa-discord" />
                        Discord
                    </button>

                    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                        <Download size={16} />
                        Descargar
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="mt-4 rounded-xl border border-blue-400/20 bg-slate-950/95 p-4 backdrop-blur-lg lg:hidden">
                    <nav className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="border-b border-white/10 pb-2 text-slate-200 transition hover:text-blue-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-5 flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-indigo-400/35 bg-slate-900/80 px-4 py-3 font-semibold">
                            <i className="fa-brands fa-discord" />
                            Discord
                        </button>

                        <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold">
                            <Download size={18} />
                            Descargar Launcher
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}