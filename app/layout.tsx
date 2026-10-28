import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted", display: "swap" });

const TITLE = "Stamply — El documento sabe adónde tiene que ir";
const DESCRIPTION =
  "La plataforma de gestión hecha para receptores judiciales de Chile: causas, trámites, ruta inteligente, estampe inteligente, Firma Electrónica Avanzada, recorrido en vivo sin perder conexión, seguimiento PJUD y cobranza automática con boletas de honorarios con SII. Prueba gratis 3 meses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stamply.cl"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://stamply.cl" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://stamply.cl",
    siteName: "Stamply",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Stamply" }],
  },
};

export const viewport: Viewport = { themeColor: "#4F46E5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={schibsted.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
