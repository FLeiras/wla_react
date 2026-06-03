export default function Footer() {
  const links = [
    "Cómo empezar",
    "Reglas del servidor",
    "Términos de uso",
    "Política de privacidad",
  ];

  const socials = [
    {
      icon: <i className="fa-brands fa-discord" />,
      label: "Discord",
    },
    {
      icon: <i className="fa-brands fa-facebook-f" />,
      label: "Facebook",
    },
    {
      icon: <i className="fa-brands fa-youtube" />,
      label: "YouTube",
    },
    {
      icon: <i className="fa-brands fa-x-twitter" />,
      label: "X",
    },
    {
      icon: <i className="fa-brands fa-instagram" />,
      label: "Instagram",
    },
  ];

  return (
    <footer className="mt-16 border-t border-white/10 bg-[#06101f]/70 backdrop-blur-md">
      <div className="mx-auto max-w-[1600px] px-9 py-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_450px_220px_260px]">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/assets/logo_footer.png"
              alt="WLA Logo"
              className="w-[80px] h-[80px]"
            />
          </div>

          {/* Descripción */}
          <div className="text-center lg:text-left">
            <p className="max-w-[430px] text-[15px] leading-8 text-slate-400">
              La comunidad en español más grande de World of Warcraft Wrath of
              the Lich King 3.3.5a para Latinoamérica.
            </p>
          </div>

          {/* Enlaces */}
          <div className="text-center lg:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-blue-300">
              Enlaces
            </h4>

            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-slate-400 transition hover:text-blue-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,.6)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Comunidad */}
          <div className="text-center lg:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-blue-300">
              Comunidad
            </h4>

            <div className="flex justify-center gap-3 lg:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/50 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,.35)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7 text-center text-xs leading-relaxed text-slate-500 lg:text-right">
          © {new Date().getFullYear()} WLA · WoWLatinoAmerica
          <br />
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
