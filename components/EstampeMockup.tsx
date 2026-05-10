export default function EstampeMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Shadow layers for depth */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-violet-200/40 blur-sm" />
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-indigo-100/60" />

      {/* PDF Document */}
      <div className="relative bg-white rounded-xl shadow-[0_20px_60px_-10px_rgba(109,40,217,0.2)] border border-slate-100 overflow-hidden">
        {/* PDF header bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-slate-200 rounded px-3 py-0.5 text-[10px] text-slate-400 flex items-center gap-1.5">
              <span>📄</span> estampe_notificacion_C-2241-2024.pdf
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6 space-y-4 text-[11px]">
          {/* Membrete */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="font-bold text-slate-800 text-[13px]">LORENZO VIDAL ARAYA</p>
              <p className="text-slate-500">Receptor Judicial Titular</p>
              <p className="text-slate-500">Primer Juzgado Civil de Santiago</p>
              <p className="text-slate-500 mt-1">Av. Libertador B. O'Higgins 1449, Of. 412</p>
              <p className="text-slate-500">Teléfono: +56 2 2696 1200</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="w-14 h-14 rounded-lg border-2 border-violet-200 flex items-center justify-center bg-violet-50">
                <span className="text-2xl">⚖️</span>
              </div>
              <p className="text-[9px] text-slate-400">Timbre Oficial</p>
            </div>
          </div>

          {/* Badge IA */}
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 bg-violet-100 text-violet-700 text-[9px] font-semibold px-2 py-0.5 rounded-full">
              ✦ Generado con IA
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-400 text-[9px]">Revisado y firmado por el receptor</span>
          </div>

          {/* Estampe body */}
          <div className="space-y-2 leading-relaxed text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">ESTAMPE:</span>{" "}
              En Santiago, a nueve de mayo de dos mil veintiséis, siendo las{" "}
              <span className="text-violet-700 font-medium">10:32 horas</span>, me constituyó en{" "}
              <span className="text-violet-700 font-medium">Av. Providencia 1234, Of. 501, Providencia</span>,
              con el objeto de notificar a{" "}
              <span className="font-semibold text-slate-800">INDUSTRIAS NORTE S.A.</span>, en la
              causa Rol N°{" "}
              <span className="font-semibold text-slate-800">C-2241-2024</span> del Primer Juzgado Civil de Santiago,
              caratulada{" "}
              <span className="italic">"Constructora Omega con Industrias Norte S.A."</span>.
            </p>
            <p>
              En dicho lugar, previa identificación, procedí a notificar{" "}
              <span className="font-semibold text-slate-800">PERSONALMENTE</span> al señor{" "}
              <span className="font-semibold">Carlos Herrera Muñoz</span>, RUT 12.345.678-9, en
              calidad de representante legal, entregando copia íntegra de la resolución de fecha
              02 de mayo de 2026 y su proveído.
            </p>
            <p>
              El notificado no opuso reparos. Firma en conformidad.
            </p>
          </div>

          {/* Signature area */}
          <div className="flex items-end justify-between pt-3 border-t border-slate-100 mt-4">
            <div className="text-center">
              <div className="w-28 border-b border-slate-400 mb-1" />
              <p className="text-[9px] text-slate-500">Lorenzo Vidal Araya</p>
              <p className="text-[9px] text-slate-400">Receptor Judicial</p>
            </div>
            <div className="text-right space-y-0.5">
              <div className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-semibold px-2 py-1 rounded-lg">
                <span>✓</span> Firmado digitalmente
              </div>
              <p className="text-[9px] text-slate-400 block">09/05/2026 · 10:47 hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
