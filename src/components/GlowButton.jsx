import { Download } from "lucide-react";

export default function GlowButton({
  children = "Descargar Launcher",
  size = "md",
}) {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-4 text-base",
  };

  return (
    <button
      className={`
        group relative isolate flex cursor-pointer items-center justify-center gap-2 overflow-visible rounded-xl
        border border-[#7fb8ff]/40
        bg-gradient-to-b from-[#67adff] via-[#2f7dff] to-[#1857d8]
        ${sizes[size]}
        font-bold text-white
        shadow-[0_0_18px_rgba(37,99,235,.65),0_0_45px_rgba(37,99,235,.25)]
        transition-all duration-300
        before:absolute before:inset-[-10px] before:-z-10 before:rounded-2xl before:bg-blue-500/0 before:blur-xl before:transition-all before:duration-300
        hover:-translate-y-[1px]
        hover:border-[#b7dcff]
        hover:shadow-[0_0_30px_rgba(59,130,246,.95),0_0_75px_rgba(37,99,235,.55)]
        hover:before:bg-blue-500/55
        active:scale-[0.98]
      `}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/35 via-white/10 to-transparent" />

      <span className="pointer-events-none absolute -left-1 top-0 h-full w-5 rotate-12 bg-white/30 blur-sm transition-all duration-500 group-hover:left-[105%]" />

      <span className="relative z-10 flex items-center gap-2">
        <Download size={size === "sm" ? 16 : 20} />
        {children}
      </span>
    </button>
  );
}
