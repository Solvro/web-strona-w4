import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeSwitch";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full overflow-x-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
