import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin-ext"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cyberphysical Systems Laboratory",
  description: "Cyberphysical Systems Laboratory main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
