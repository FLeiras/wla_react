export default function HeroStat({ icon, value, label, gold = false }) {
    return (
        <div className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0 first:pt-0 last:pb-0">
            <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-blue-500/10 ${gold
                        ? "border-yellow-300/30 text-yellow-300 shadow-[0_0_15px_rgba(255,213,107,.25)]"
                        : "border-blue-300/30 text-blue-300 shadow-[0_0_15px_rgba(80,140,255,.22)]"
                    }`}
            >
                {icon}
            </div>

            <div>
                <strong className="block text-2xl font-bold text-[#ffd56b] drop-shadow-[0_2px_4px_rgba(0,0,0,.8)]">
                    {value}
                </strong>
                <span className="text-xs font-semibold text-slate-300">{label}</span>
            </div>
        </div>
    );
}