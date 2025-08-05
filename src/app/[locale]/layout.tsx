import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import ReduxProvider from "@/redux/provider";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "swiper/css/bundle";
import "./globals.scss";
import AuthProvider from "@/provider/AuthProvider";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


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
  title: "Livasa ",
  description: "Livasa care about clients",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
    params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>

      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
            <NextIntlClientProvider>
                     <AuthProvider>
              <ReduxProvider>
          <VideoProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <Toaster position="top-center" richColors />
            <GlobalVideoModal />
          </VideoProvider>
        </ReduxProvider>
        </AuthProvider>
            </NextIntlClientProvider>
 
    
      </body>
    </html>
  );
}
