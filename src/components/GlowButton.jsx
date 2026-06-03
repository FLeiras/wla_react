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
        group
        relative
        isolate

        flex
        cursor-pointer
        items-center
        justify-center
        gap-2

        overflow-hidden
        rounded-xl

        border
        border-[#7fb8ff]/40

        bg-gradient-to-b
        from-[#67adff]
        via-[#2f7dff]
        to-[#1857d8]

        ${sizes[size]}

        font-bold
        text-white

        shadow-[0_0_10px_rgba(37,99,235,.35),0_0_25px_rgba(37,99,235,.15)]

        transition-all
        duration-300

        hover:-translate-y-[1px]
        hover:border-[#b7dcff]

        hover:shadow-[0_0_18px_rgba(59,130,246,.55),0_0_40px_rgba(37,99,235,.25)]

        hover:before:bg-blue-500/20

        active:scale-[0.98]

        before:absolute
        before:inset-[-8px]
        before:-z-10
        before:rounded-2xl
        before:bg-blue-500/0
        before:blur-xl
        before:transition-all
        before:duration-300
      `}
    >
      {/* Brillo superior */}
      <span
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0

          h-1/2

          rounded-t-xl

          bg-gradient-to-b
          from-white/25
          via-white/10
          to-transparent
        "
      />

      {/* Reflejo que cruza el botón */}
      <span
        className="
          pointer-events-none
          absolute
          -left-1
          top-0

          h-full
          w-5

          rotate-12

          bg-white/15

          blur-sm

          transition-all
          duration-500

          group-hover:left-[105%]
        "
      />

      {/* Contenido */}
      <span className="relative z-10 flex items-center gap-2">
        <Download size={size === "sm" ? 16 : 20} />
        {children}
      </span>
    </button>
  );
}
