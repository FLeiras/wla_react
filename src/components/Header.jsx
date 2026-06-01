import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Cómo empezar", path: "/como-empezar" },
    { label: "Estado", path: "/estado" },
    { label: "Servidor", path: "/servidor" },
    { label: "Comunidad", path: "/comunidad" },
    { label: "Soporte", path: "/soporte" },
    { label: "Cuenta", path: "/cuenta" },
  ];

  return (
    <header className="relative mx-auto max-w-[1400px] px-5 py-4">
      <div className="flex items-center justify-between lg:hidden">
        <img
          src="/assets/logo_sin_fondo.png"
          alt="WLA Logo"
          className="h-16 w-auto"
        />

        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer rounded-lg border border-white/10 bg-slate-900/80 p-2 text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="hidden lg:grid lg:grid-cols-[240px_1fr_340px] lg:items-center">
        <img
          src="/assets/logo_sin_fondo.png"
          alt="WLA Logo"
          className="h-24 w-auto drop-shadow-[0_0_10px_rgba(0,153,255,.5)]"
        />

        <nav className="flex items-center justify-center gap-5 text-[12px] font-semibold">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `whitespace-nowrap transition hover:text-blue-300 ${
                  isActive
                    ? "border-b-2 border-blue-400 pb-2 text-white"
                    : "text-slate-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex justify-end gap-2">
          <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-400/35 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white">
            <i className="fa-brands fa-discord" />
            Discord
          </button>

          <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            <Download size={16} />
            Descargar
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 rounded-xl border border-blue-400/20 bg-slate-950/95 p-4 backdrop-blur-lg lg:hidden">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 pb-2 transition hover:text-blue-300 ${
                    isActive ? "text-blue-300" : "text-slate-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-indigo-400/35 bg-slate-900/80 px-4 py-3 font-semibold text-white">
              <i className="fa-brands fa-discord" />
              Discord
            </button>

            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white">
              <Download size={18} />
              Descargar Launcher
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
