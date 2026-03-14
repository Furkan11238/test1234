import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "MFK Stukadoors — Vakmanschap in Limburg",
  description:
    "MFK Stukadoors: 20 jaar ervaring in pleisterwerken, gyproc, schilderwerken en renovatie in heel Limburg. Vraag een gratis offerte aan.",
  authors: [{ name: "MFK Stukadoors" }],
  openGraph: {
    type: "website",
    title: "MFK Stukadoors — Vakmanschap in Limburg",
    description:
      "MFK Stukadoors: 20 jaar ervaring in pleisterwerken, gyproc, schilderwerken en renovatie in heel Limburg. Vraag een gratis offerte aan.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a848d4a0-ade3-4e91-8b57-7da016da8f6e/id-preview-06ed4e82--75c776dc-f2df-4bf8-b528-148386ceb927.lovable.app-1773454210773.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MFK Stukadoors — Vakmanschap in Limburg",
    description:
      "MFK Stukadoors: 20 jaar ervaring in pleisterwerken, gyproc, schilderwerken en renovatie in heel Limburg. Vraag een gratis offerte aan.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a848d4a0-ade3-4e91-8b57-7da016da8f6e/id-preview-06ed4e82--75c776dc-f2df-4bf8-b528-148386ceb927.lovable.app-1773454210773.png",
    ],
  },
  metadataBase: new URL("https://www.mfkstukadoors.be"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
