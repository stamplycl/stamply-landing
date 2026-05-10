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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
