import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s • Taste of the World',
    default: 'Taste of the World',
  },
  description: "Restaurant Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
