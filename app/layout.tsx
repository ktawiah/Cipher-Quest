import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CipherQuest",
  description: "Encryption and Decryption with one button click",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen`}
        style={{
          background:
            "radial-gradient(94.33% 120.61% at 23.08% 7.11%, #1a2835 0%, #111c26 21.32%, #000 86.04%)",
        }}
      >
        <div className="min-h-screen w-full bg-[url('../public/cybersecurity1.png')] bg-center bg-cover bg-no-repeat">
          {children}
        </div>
      </body>
    </html>
  );
}
