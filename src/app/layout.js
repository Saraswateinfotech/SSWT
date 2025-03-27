import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/utilities/Header/Header";
import FooterPage from "@/components/utilities/Footer/FooterPage";
import { Outfit } from "next/font/google";
import SocialMediaSticky from "@/components/utilities/SocialMediaSticky";

const companyText = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Saraswate",
  description: "Build the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${companyText.className} antialiased`}
      >
        <Header />
        {children}
        <FooterPage />
        {/* <SocialMediaSticky /> */}
      </body>
    </html>
  );
}
