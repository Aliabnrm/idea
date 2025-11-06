import "./globals.css";
import type { Metadata } from "next";
import { ReactQueryProvider } from "@/src/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Routine",
  description: "idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
