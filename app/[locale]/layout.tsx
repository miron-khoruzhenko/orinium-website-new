import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { siteConfig } from "@/config"

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar/> 
      {children}
      <Footer />
    </NextIntlClientProvider>
  )
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  return {
    // Здесь можно настроить title и description для каждой локали
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ru': '/ru',
        'tr': '/tr',
      },
    },
  }
}