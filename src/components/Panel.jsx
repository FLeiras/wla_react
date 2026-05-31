export default function Panel({ title, children }) {
    return (
        <article className="min-h-[260px] rounded-xl border border-white/10 bg-slate-950/60 p-5 shadow-[inset_0_0_20px_rgba(0,0,0,.25),0_0_20px_rgba(0,0,0,.25)] backdrop-blur-sm">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-100">
                {title}
            </h3>

            {children}
        </article>
    );
}