import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";  
import Footer from "./component/Footer";
import WhatsAppFloat from "./component/WhatsAppFloat";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JMD Global Services",
  description: "Company Registration and Compliance Experts Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col text-white">
  <Navbar />

  <main className="flex-grow min-h-screen
   bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]
   ">
    {children}
  </main>

  <Footer />
  <WhatsAppFloat />
</body>
    </html>
  );
}
