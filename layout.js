import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s • Taste Of The World',
    default: 'Taste Of The World',
  },
  description: "Restaurant Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
