/**
 * Marca de Stamply: rayo blanco sobre cuadrado con gradiente violeta→índigo.
 * Misma identidad que el favicon / icon-512.png. Úsalo como logo inline.
 */
export default function BoltMark({
  className = "w-8 h-8",
  rounded = "rounded-lg",
}: {
  className?: string;
  rounded?: string;
}) {
  return (
    <span
      className={`${className} ${rounded} bg-gradient-to-br from-[#8B5CF6] to-[#4F46E5] flex items-center justify-center shadow-md`}
    >
      <svg viewBox="0 0 512 512" className="w-full h-full" aria-hidden="true">
        <g transform="translate(256,256) scale(0.6) translate(-252.7,-249.2)">
          <path
            d="M314.214 42.794C330.629 51.235 338.173 70.607 331.973 87.979L285.79 217.383H373.581C405.651 217.383 421.211 256.574 397.91 278.604L210.652 455.642C197.122 468.433 176.074 468.984 161.895 456.917C148.731 445.714 144.759 427.003 152.395 411.491L218.602 277.032H132.353C100.524 277.032 84.841 238.34 107.638 216.162L273.763 54.55C284.395 44.204 300.547 35.764 314.214 42.794Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </span>
  );
}
