import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KYL PONIO | Full Stack Developer",
  description:
    "KYL PONIO portfolio showcasing full stack development projects using Next.js, React, Node.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-auto bg-[#020617] text-white">
        {children}

        {/* 🔥 Force Usap widget on top */}
        <style>
          {`
            iframe[src*="usap.chat"],
            div[id*="usap"],
            div[class*="usap"] {
              z-index: 999999 !important;
              position: fixed !important;
            }

            @media (max-width: 640px) {
              iframe[src*="usap.chat"] {
                bottom: 20px !important;
                right: 12px !important;
              }
            }
          `}
        </style>

        {/* Usap config */}
        <Script id="usap-config" strategy="afterInteractive">
          {`
            window.UsapConfig = {
              apiUrl: "https://app.usap.chat/api",
              workspaceId: "65115c42-3461-4a0a-b5b7-1eced3b34597"
            };
          `}
        </Script>

        {/* Usap widget */}
        <Script
          src="https://app.usap.chat/api/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}