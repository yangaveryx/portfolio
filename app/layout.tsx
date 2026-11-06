import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avery Yang — Developer",
  description: "Cornell Computer Science and Cognitive Science student building full-stack applications, ASL recognition tools, and software for learning and community impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
