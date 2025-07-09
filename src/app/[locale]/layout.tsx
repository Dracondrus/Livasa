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
