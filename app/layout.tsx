import type { Metadata } from "next";
import { Tektur, Exo_2 } from "next/font/google";
import "./global.scss";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

const tektur = Tektur({
  subsets: ["cyrillic", "latin"],
  variable: "--font-tektur",
});
const exo2 = Exo_2({
  subsets: ["cyrillic", "latin"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "My Site",
  description: "Here is all about me & my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} ${tektur.variable}`}>
        <TheHeader />
        <main className="main">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
