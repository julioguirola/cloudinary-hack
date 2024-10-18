import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halloween Myst",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="bg-violet-950 m-0">{children}</body>
    </html>
  );
}
