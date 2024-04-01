import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "./wallet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rug Pull Me",
  description: "Rug Pull Me",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rugpullme.xyz/og-image.png",
    title: "Rug Pull Me",
    description: "Rug Pull Me meme",
    images: [
      {
        url: "https://rugpullme.xyz/og-image.png",
        alt: "Rug Pull Me",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WalletProvider>
        <body className={inter.className}>{children}</body>
      </WalletProvider>
    </html>
  );
}
