export default function Footer() {
    return (
        <footer className="mx-auto mt-4 max-w-[1400px] border-t border-white/10 px-5 py-8 text-sm text-slate-400">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_1fr_1fr]">

                {/* Logo */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src="/assets/logo_sin_fondo.png"
                        alt="WLA Logo"
                        className="h-16 w-auto opacity-90"
                    />
                </div>

                {/* Descripción */}
                <div className="text-center lg:text-left">
                    <p>
                        La comunidad en español más grande de World of Warcraft
                        Wrath of the Lich King 3.3.5a para Latinoamérica.
                    </p>
                </div>

                {/* Enlaces */}
                <div className="text-center lg:text-left">
                    <h4 className="mb-3 font-bold text-slate-200">
                        Enlaces
                    </h4>

                    <div className="space-y-2">
                        <p className="cursor-pointer hover:text-white">
                            Cómo empezar
                        </p>

                        <p className="cursor-pointer hover:text-white">
                            Reglas del servidor
                        </p>

                        <p className="cursor-pointer hover:text-white">
                            Estado del servidor
                        </p>

                        <p className="cursor-pointer hover:text-white">
                            Soporte
                        </p>
                    </div>
                </div>

                {/* Comunidad */}
                <div className="text-center lg:text-left">
                    <h4 className="mb-3 font-bold text-slate-200">
                        Comunidad
                    </h4>

                    <div className="space-y-2">
                        <p>Discord</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>YouTube</p>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} WLA - WoW Latinoamérica.
                Todos los derechos reservados.
            </div>
        </footer>
    );
}