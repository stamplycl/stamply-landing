const PARADAS = [
  { orden: 1, direccion: "Av. Providencia 1234, Of. 501",  causa: "C-2241-2024", estado: "completada",  hora: "09:15" },
  { orden: 2, direccion: "Los Leones 432, Piso 3",          causa: "C-0892-2024", estado: "completada",  hora: "09:48" },
  { orden: 3, direccion: "Av. Apoquindo 3001, Of. 208",     causa: "C-3107-2025", estado: "en-curso",    hora: "10:30" },
  { orden: 4, direccion: "Isidora Goyenechea 2800",         causa: "C-1445-2025", estado: "pendiente",   hora: "11:10" },
  { orden: 5, direccion: "Av. El Bosque Norte 0177",        causa: "C-0234-2025", estado: "pendiente",   hora: "11:45" },
];

const STATUS = {
  completada: { label: "Completada", color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
  "en-curso":  { label: "En curso",   color: "bg-violet-100 text-violet-700",   dot: "bg-violet-500 animate-pulse" },
  pendiente:  { label: "Pendiente",  color: "bg-slate-100 text-slate-500",     dot: "bg-slate-300" },
};

export default function RutaMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* App chrome */}
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(109,40,217,0.2)] border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base">🛣️</span>
              <p className="font-bold text-slate-800 text-sm">Ruta del día</p>
              <span className="inline-flex items-center gap-1 bg-violet-100 text-violet-700 text-[9px] font-semibold px-2 py-0.5 rounded-full">
                ✦ Optimizada con IA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">Viernes 9 de mayo · 5 diligencias</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-slate-800">23.4 km</p>
            <p className="text-[10px] text-slate-400">distancia total</p>
          </div>
        </div>

        {/* IA summary */}
        <div className="mx-4 mt-3 p-3 rounded-xl bg-violet-50 border border-violet-100 flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-[10px]">✦</span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-violet-800">Sugerencia de Stamply IA</p>
            <p className="text-[10px] text-violet-600 leading-relaxed mt-0.5">
              Agrupé tus 5 causas por zona geográfica. La ruta optimizada ahorra 12 km y
              aproximadamente 35 min respecto al orden original.
            </p>
          </div>
        </div>

        {/* Map area */}
        <div className="mx-4 mt-3 h-32 rounded-xl bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-100 relative overflow-hidden flex items-center justify-center">
          {/* Simulated map */}
          <svg viewBox="0 0 320 120" className="w-full h-full opacity-60">
            {/* Streets */}
            <line x1="0" y1="60" x2="320" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="160" y1="0" x2="160" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="0" y1="30" x2="320" y2="80" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="80" y1="0" x2="240" y2="120" stroke="#e2e8f0" strokeWidth="1" />
            {/* Route path */}
            <polyline
              points="40,90 80,70 130,55 190,45 260,35 290,25"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0"
            />
            {/* Stops */}
            {[
              [40, 90], [80, 70], [130, 55], [190, 45], [260, 35],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="7" fill={i === 2 ? "#7c3aed" : i < 2 ? "#10b981" : "#e2e8f0"} stroke="white" strokeWidth="2" />
                <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="6" fill="white" fontWeight="bold">
                  {i + 1}
                </text>
              </g>
            ))}
          </svg>
          <div className="absolute bottom-2 right-2 text-[9px] text-slate-400 bg-white/80 rounded px-1.5 py-0.5">
            Vista esquemática
          </div>
        </div>

        {/* Stop list */}
        <div className="p-4 space-y-2">
          {PARADAS.map((p) => {
            const s = STATUS[p.estado as keyof typeof STATUS];
            return (
              <div
                key={p.orden}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                  p.estado === "en-curso"
                    ? "border-violet-200 bg-violet-50"
                    : "border-slate-100 bg-slate-50"
                }`}
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      p.estado === "completada"
                        ? "bg-emerald-500 text-white"
                        : p.estado === "en-curso"
                        ? "bg-violet-600 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {p.estado === "completada" ? "✓" : p.orden}
                  </div>
                  {p.orden < PARADAS.length && (
                    <div className={`w-px h-3 ${p.estado === "completada" ? "bg-emerald-300" : "bg-slate-200"}`} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-slate-700 truncate">{p.direccion}</p>
                  <p className="text-[10px] text-slate-400">Causa {p.causa}</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${s.color}`}>
                    {s.label}
                  </span>
                  <span className="text-[10px] text-slate-400">{p.hora}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
            <div className="text-center">
              <p className="text-xs font-bold text-slate-800">2/5</p>
              <p className="text-[10px] text-slate-400">Completadas</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-xs font-bold text-violet-700">1</p>
              <p className="text-[10px] text-slate-400">En curso</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-xs font-bold text-slate-800">2</p>
              <p className="text-[10px] text-slate-400">Pendientes</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-xs font-bold text-slate-800">35 min</p>
              <p className="text-[10px] text-slate-400">Ahorrados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
