import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import ReduxProvider from "@/redux/provider";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import "swiper/css/bundle";
import "./globals.scss";
import "./main.scss";

// Load Plus Jakarta Sans from Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Load Geist Sans & Geist Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LIVASA ",
  description: "LIVASA",
  icons: {
icon: '/favicon.ico',    
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params :Promise<{locale: string }>
}>) {
   const {locale} = await params;
     if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
  <html lang={locale}>
   
       <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
      rel="stylesheet"
    />
  </head>
      
   
  
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <NextIntlClientProvider>
           <ReduxProvider>
          <VideoProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <Toaster position="top-center" richColors />
            <GlobalVideoModal />
          </VideoProvider>
        </ReduxProvider>
      </NextIntlClientProvider>
     
      </body>
    </html>
  );
}
