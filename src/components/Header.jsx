import { Download } from "lucide-react";

export default function Header() {
    return (
        <header className="mx-auto grid max-w-[1400px] grid-cols-[240px_1fr_300px] items-center px-5 py-3">
            <img
                src="/assets/logo_sin_fondo.png"
                alt="WLA Logo"
                className="h-24 w-auto drop-shadow-[0_0_10px_rgba(0,153,255,.5)]"
            />

            <nav className="flex justify-center gap-6 whitespace-nowrap text-[13px] font-semibold text-slate-100">
                <a className="border-b-2 border-blue-400 pb-2" href="#">
                    Inicio
                </a>
                <a href="#">Cómo empezar</a>
                <a href="#">Estado del servidor</a>
                <a href="#">Servidor</a>
                <a href="#">Comunidad</a>
                <a href="#">Soporte</a>
                <a href="#">Cuenta</a>
            </nav>

            <div className="flex justify-end gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-indigo-400/35 bg-slate-900/80 px-4 py-2 text-sm font-semibold">
                    <i className="fa-brands fa-discord" />
                    Discord
                </button>

                <button className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold">
                    <Download size={16} />
                    Descargar Launcher
                </button>
            </div>
        </header>
    );
}