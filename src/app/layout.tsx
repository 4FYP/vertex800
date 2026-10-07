import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import { Ambient } from "@/components/Ambient";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { data } from "@/lib/data";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${data.company.name} | ${data.company.tagline}`,
    template: `%s | ${data.company.name}`,
  },
  description:
    "Global consulting and technology firm helping organizations scale with intelligent talent and cutting-edge solutions.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="site-shell flex min-h-full flex-col">
        <Ambient />
        <Header />
        <main className="relative z-[1] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
