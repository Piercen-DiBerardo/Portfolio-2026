import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piercen Di Berardo | Software Engineer",
  description:
    "Full-stack software engineer and product builder working across web applications, AI systems, adaptive education, cloud infrastructure, and public-sector technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
