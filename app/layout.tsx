import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "./components";

export const metadata: Metadata = {
  title: "Nestly Ops",
  description: "Internal operating system for Nestly",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
