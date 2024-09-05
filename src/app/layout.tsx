import type { Metadata } from "next";
import { Akaya_Telivigala} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const akaya = Akaya_Telivigala({
  weight: "400",
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Torcida Mista",
  description: "A casa de todo Torcedor!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={akaya.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
