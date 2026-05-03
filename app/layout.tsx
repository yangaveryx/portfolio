import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avery Yang — Developer",
  description: "Full-stack developer based in Washington, D.C.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
