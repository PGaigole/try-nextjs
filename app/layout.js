import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Next.js course",
  description: "Code with Poonam",
  openGraph: {
    siteName: "Nextjs course",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="p-20 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
