import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

import GlowButton from "./GlowButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Cómo empezar", path: "/como-empezar" },
    { label: "Estado del servidor", path: "/estado" },
    { label: "Servidor", path: "/servidor" },
    { label: "Comunidad", path: "/comunidad" },
    { label: "Soporte", path: "/soporte" },
    { label: "Cuenta", path: "/cuenta" },
  ];

  const desktopLinkClass = ({ isActive }) =>
    `relative flex h-24 items-center whitespace-nowrap px-1 text-[15px] font-semibold transition hover:text-white ${
      isActive ? "text-white" : "text-slate-300"
    }`;

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

        <nav className="flex items-center justify-center gap-7">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={desktopLinkClass}
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-4 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-white via-sky-300 to-blue-500 shadow-[0_0_10px_rgba(96,165,250,.75)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex justify-end gap-2">
          <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-400/35 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] hover:border-blue-400/60 active:scale-[0.98]">
            <i className="fa-brands fa-discord" />
            Discord
          </button>

          <GlowButton size="sm">Descargar Launcher</GlowButton>
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
                  `relative border-b border-white/10 pb-3 text-[15px] font-semibold transition hover:text-blue-300 ${
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

            <GlowButton size="md">Descargar Launcher</GlowButton>
          </div>
        </div>
      )}
    </header>
  );
}
