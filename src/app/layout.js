import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SmartHire",
  description: "Intelligent Job Portal System",
};

import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "../context/LoadingProvider";
import ContentLoader from "../components/ContentLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <ContentLoader>{children}</ContentLoader>
          <Toaster position="top-right" />
        </LoadingProvider>
      </body>
    </html>
  );
}
