import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import { ToastContainer } from 'react-toastify';
import Header from "@/components/Header";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Şam Dünyası | Əl İşi Şamlar",
  description: "Əl işi, təbii materiallarla hazırlanan xüsusi dizayn şamlar. 100% soya mumu və təbii efir yağları ilə hazırlanır.",
  keywords: ['şam', 'əl işi', 'təbii şam', 'soya şamı', 'hədiyyəlik şam', 'dekorativ şam', 'ətirli şam'],
  openGraph: {
    title: 'Şam Dünyası | Əl İşi Şamlar',
    description: 'Əl işi, təbii materiallarla hazırlanan xüsusi dizayn şamlar',
    images: ['/candle.jpg'],
  },
  icons: {
    icon: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <CartProvider>
          <Header />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CartProvider>
      </body>
    </html>
  );
}
