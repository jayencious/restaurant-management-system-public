import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s • Taste of the World',
    default: 'Taste of the World',
  },
  description: "Restaurant Management System",
};

export default function RootLayout({
  children,
}) {
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
