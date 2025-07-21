import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/meanmenu.min.css";
import "../app/styles/flaticon.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global style
import "../app/styles/style.css";
import "../app/styles/responsive.css";

import type { Metadata } from "next";
import { Lato } from "next/font/google"; 
import GoTop from "@/components/Layouts/GoTop";


const lato = Lato({ 
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"] 
});

// export const metadata: Metadata = {
//   title: "G3 CyberSpace",
//   description: "G3 CyberSpace Cyber Security Company",
//   icons: "/favicon.ico" 
// };

export const metadata: Metadata = {
  title: "G3 CyberSpace",
  description: "G3 CyberSpace Cyber Security Company",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "64x64",
      },
    ],
  },

//   icons: {
//   icon: [
//     { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },  
//     { url: "/favicon-16x16.ico", sizes: "16x16", type: "image/x-icon" },     
//     { url: "/favicon-32x32.ico", sizes: "32x32", type: "image/x-icon" },     
//     { url: "/favicon-48x48.ico", sizes: "48x48", type: "image/x-icon" },     
//     { url: "/favicon-64x64.ico", sizes: "64x64", type: "image/x-icon" },     
//     { url: "/favicon-96x96.ico", sizes: "96x96", type: "image/x-icon" },     
//     { url: "/favicon-128x128.ico", sizes: "128x128", type: "image/x-icon" }, 
//     { url: "/favicon-192x192.ico", sizes: "192x192", type: "image/x-icon" }, 
//     { url: "/favicon-256x256.ico", sizes: "256x256", type: "image/x-icon" }, 
//     { url: "/favicon-384x384.ico", sizes: "384x384", type: "image/x-icon" },
//     { url: "/favicon-512x512.ico", sizes: "512x512", type: "image/x-icon" }, 
//   ],
// }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}

        <GoTop />
      </body>
    </html>
  );
}
