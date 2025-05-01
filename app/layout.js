import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Providers from './providers';
import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s • Taste of the World',
    default: 'Taste of the World',
  },
  description: "This project titled 'Restaurant Management System', developed solely by jayencious. Although, published on this repository is for educational purposes and can be used for learning purposes. This project if used, the person should give credit to the owner and developer of this project for any merit earned. This project includes features like user authentication, for customers and admins. Customers can access the menu and add the food items to their cart and place their orders and make payments online through Razorpay payment gateway.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${playfair.className}`}>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
