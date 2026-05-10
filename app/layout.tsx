import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Stamply — La plataforma digital para receptores judiciales",
  description:
    "Gestiona causas, genera estampes con inteligencia artificial, firma documentos y coordina tu trabajo judicial desde un solo lugar.",
  openGraph: {
    title: "Stamply — La plataforma digital para receptores judiciales",
    description:
      "Gestiona causas, genera estampes con IA, firma documentos y coordina tu trabajo judicial desde un solo lugar.",
    url: "https://stamply.cl",
    siteName: "Stamply",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-full flex flex-col antialiased grid-bg">
        {/* Fixed background blobs — always visible regardless of scroll */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-violet-200/30 blur-[120px]" />
          <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-200/25 blur-[100px]" />
          <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] rounded-full bg-purple-100/20 blur-[100px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
