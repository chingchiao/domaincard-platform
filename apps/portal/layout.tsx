import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "DomainCard Beta",
  description:
    "Request private beta access to DomainCard, the rewards and expense platform for the domain economy."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
