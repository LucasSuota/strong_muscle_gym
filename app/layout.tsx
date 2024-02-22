import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STRONG MUSCLE GYM",
  description: "The new Mecca of Bodybuilding is coming!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
