import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import QueryProvider from "@/lib/providers/react-query-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aawiz Next.js Sample",
  description: "Next.js Sample project for interview task of Aawiz",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Dashboard",
    "Aawiz",
    "Interview",
  ],
  authors: [{ name: "Ali Mohammadi" }],
  creator: "Ali Mohammadi",
  publisher: "Aawiz",
  metadataBase: new URL("https://sampleDomain.com"),
  alternates: {
    canonical: "https://sampleDomain.com",
    languages: {
      "en-US": "/en",
      "fa-IR": "/fa",
    },
  },
  openGraph: {
    title: "Aawiz Next.js Sample",
    description: "Next.js Sample project for interview task of Aawiz",
    url: "https://sampledomain.com",
    siteName: "Aawiz Next.js Sample",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aawiz Next.js Sample Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aawiz Next.js Sample",
    description: "Next.js Sample project for interview task of Aawiz",
    images: ["/og-image.png"],
    creator: "@YourTwitterHandle",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
