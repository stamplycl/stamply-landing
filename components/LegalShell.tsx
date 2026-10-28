import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalShell({
  title,
  subtitle,
  updated,
  children,
}: {
  title: string;
  subtitle: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-500">
              Documento legal
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {title}
            </h1>
            <p className="mt-3 text-slate-500">{subtitle}</p>
            <p className="mt-1 text-sm text-slate-400">
              Última actualización: {updated}
            </p>
          </header>

          {/* Body */}
          <div className="legal-prose bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-[0_2px_20px_-4px_rgba(19,15,103,0.10)] p-6 sm:p-9">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
