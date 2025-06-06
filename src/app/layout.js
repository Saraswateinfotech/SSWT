import "./globals.css";
import { Outfit } from "next/font/google";

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
      <body className={`${companyText.className} antialiased bg-white`}>
        {children}
        {/* <SocialMediaSticky /> */}
      </body>
    </html>
  );
}
