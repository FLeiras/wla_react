export default function Footer() {
    return (
        <footer className="mx-auto mt-4 grid max-w-[1400px] grid-cols-[220px_1fr_1fr_1fr] gap-8 border-t border-white/10 px-5 py-8 text-sm text-slate-400">
            <img src="/assets/logo_sin_fondo.png" alt="WLA Logo" className="h-20 w-auto" />

            <p>
                La comunidad en español más grande de World of Warcraft Wrath of the Lich King 3.3.5a para Latinoamérica.
            </p>

            <div>
                <h4 className="mb-2 font-bold text-slate-200">Enlaces</h4>
                <p>Cómo empezar</p>
                <p>Reglas del servidor</p>
            </div>

            <div>
                <h4 className="mb-2 font-bold text-slate-200">Comunidad</h4>
                <p>Discord · Facebook · YouTube · Instagram</p>
            </div>
        </footer>
    );
}